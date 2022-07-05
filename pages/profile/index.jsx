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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [src, setSrc] = useState(
    "https://cdn-icons-png.flaticon.com/512/747/747376.png"
  );
  const [data, setData] = useState(user.data);
  const [image, setImage] = useState();
  const [form, setForm] = useState({ image: "" });

  const changeImg = (e) => {
    const { name, value, files } = e.target;
    if (files[0]) {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const handleImage = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const dataForm in form) {
        formData.append(dataForm, form[dataForm]);
      }

      const result = await axios.patch(`user/image/${data.id}`, formData);
      console.log(result.data);

      resetImg();

      alert("sukses update photo");
      getUser();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  console.log(user);
  console.log(form);
  console.log(image);

  const handleLogout = async (event) => {
    event.preventDefault();
    const result = await axios.post("/auth/logout");
    console.log(result);

    await dispatch({ type: "RESET_DATA" });
    Cookies.remove("id");
    Cookies.remove("token");

    router.push("/login");
  };

  const getUser = async () => {
    const result = await dispatch(getUserId(data.id));
    setData(result.value.data.data);
  };

  const resetImg = () => {
    setImage();
  };

  useEffect(() => {
    if (data.image) {
      setSrc(process.env.URL_IMAGE + data.image);
    }
  }, [image]);

  return (
    <>
      <div className="col border p-5 main-content main-content-inputAmount">
        <div className="row  row-cols-1 m-0 justify-content-center d-flex">
          <div className="col p-0 text-center">
            <img src={image ? image : src} className="profile-photo" alt="" />
          </div>
          <div className="col p-0 text-center">
            <label className="btn btn-link profile-edit" for="uploadImg">
              <i className="bi bi-pen"></i> Edit
            </label>
            <input
              type="file"
              name="image"
              id="uploadImg"
              hidden
              onChange={(e) => changeImg(e)}
            />
          </div>
        </div>
        {image ? (
          <>
            <div className="row justify-content-center">
              <button
                className="btn btn-success mb-3"
                style={{ width: "150px" }}
                onClick={(e) => handleImage(e)}
              >
                Save
              </button>
            </div>
            <div className="row justify-content-center">
              <button
                className="btn btn-outline-danger"
                style={{ width: "150px" }}
                onClick={resetImg}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="row mt-4  m-0">
          <label className=" profile-name">
            {data.firstName + " " + data.lastName}
          </label>
          <p className=" profile-phone">{data.noTelp}</p>
        </div>
        <div className="row mt-5 m-0 d-flex justify-content-center row-cols-1 g-4">
          <div className="col d-grid col-7">
            <Link href="/profile/personalInfo">
              <a className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
                Personal Information
                <i className="bi bi-arrow-right profile-icon"></i>
              </a>
            </Link>
          </div>
          <div className="col d-grid col-7">
            <Link href="/profile/changePassword">
              <a className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
                Change Password
                <i className="bi bi-arrow-right profile-icon"></i>
              </a>
            </Link>
          </div>
          <div className="col d-grid col-7">
            <Link href="/profile/checkPin">
              <a className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
                Change Pin
                <i className="bi bi-arrow-right profile-icon"></i>
              </a>
            </Link>
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
