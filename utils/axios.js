import axios from "axios";
import Cookies from "js-cookie";

const axiosApiIntances = axios.create({
  baseURL: process.env.URL_BACKEND,
});

// console.log(axiosApiIntances);

axiosApiIntances.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApiIntances.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response.status === 403) {
    //   if (error.response.data.message !== "jwt expired") {
    //     // alert(error.response.data.msg);
    //     localStorage.clear();
    //     window.location.href = "/signin";
    //   } else {
    //     const refreshToken = localStorage.getItem("refreshToken");
    //     // console.log(refreshToken);
    //     axiosApiIntances
    //       .post("auth/refresh", { refreshToken })
    //       .then((res) => {
    //         // res = {
    //         //   data: {
    //         //     data: {
    //         //       id: ...
    //         //       token: ...
    //         //       refreshToken: ...
    //         //     }
    //         //   }
    //         // }
    //         // console.log(res);
    //         // alert("token baru berhasil di dapatkan");
    //         localStorage.setItem("token", res.data.data.token);
    //         localStorage.setItem("refreshToken", res.data.data.refreshToken);
    //         window.location.reload();
    //       })
    //       .catch((err) => {
    //         // alert(error.response.data.msg);
    //         localStorage.clear();
    //         window.location.href = "/signin";
    //       });
    //   }
    // }
    if (error.response.status === 403) {
      if (error.response.data.msg !== "jwt expired") {
        localStorage.clear();
        window.location.href = "/login";
      } else {
        const refreshToken = localStorage.getItem("refreshToken");
        axiosApiIntances
          .post("auth/refresh", { refreshToken })
          .then((res) => {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("refreshToken", res.data.data.refreshToken);
            window.location.reload();
          })
          .catch((err) => {
            localStorage.clear();
            window.location.href = "/login";
            console.log("refresh error");
            console.log(err);
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
