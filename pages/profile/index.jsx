import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosServer from "../../utils/axiosServer";
import axios from "../../utils/axios";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Cookies from "js-cookie";
import { getUserId } from "../../stores/action/user";

// import cookies from "next-cookies";
// import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const id = Cookies.get("id");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [src, setSrc] = useState(
    "https://cdn-icons-png.flaticon.com/512/747/747376.png"
  );
  const [data, setData] = useState(user.data);
  // const [image, setImage] = useState(
  //   (src = "https://cdn-icons-png.flaticon.com/512/747/747376.png")
  // );

  if (data.image) {
    setSrc(data.image);
  }

  const handleLogout = async (event) => {
    event.preventDefault();
    const result = await axios.post("/auth/logout");
    console.log(result);

    await dispatch({ type: "RESET_DATA" });
    Cookies.remove("id");
    Cookies.remove("token");

    router.push("/login");
  };

  console.log(data);
  const getUser = async () => {
    const result = await dispatch(getUserId(id));
    // console.log(result.value.data.data);
    setData(result.value.data.data);
  };

  useEffect(() => {
    // getUser();
  }, []);

  return (
    <>
      <div className="col border p-5 main-content main-content-inputAmount">
        <div className="row  row-cols-1 m-0 justify-content-center d-flex">
          <div className="col p-0 text-center">
            <img src={src} className="profile-photo" alt="" />
          </div>
          <div className="col p-0  text-center">
            <button className="btn btn-link profile-edit ">
              <i className="bi bi-pen"></i> Edit
            </button>
          </div>
        </div>
        <div className="row mt-4  m-0">
          <label className=" profile-name">
            {data.firstName + " " + data.lastName}
          </label>
          <p className=" profile-phone">{data.noTelp}</p>
        </div>
        <div className="row mt-5 m-0 d-flex justify-content-center row-cols-1 g-4">
          <div className="col d-grid col-7">
            <button className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
              Personal Information
              <i className="bi bi-arrow-right profile-icon"></i>
            </button>
          </div>
          <div className="col d-grid col-7">
            <button className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
              Change Password
              <i className="bi bi-arrow-right profile-icon"></i>
            </button>
          </div>
          <div className="col d-grid col-7">
            <button className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
              Change Pin
              <i className="bi bi-arrow-right profile-icon"></i>
            </button>
          </div>

          <div className="col d-grid col-7">
            <button
              onClick={(event) => handleLogout(event)}
              className="btn btn-secondary border-0 d-flex justify-content-between profile-btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
