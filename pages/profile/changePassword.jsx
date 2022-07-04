import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";

export default function ChangePassword() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState(user.data);
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.patch(`user/password/${data.id}`, form);
      alert(result.data.msg);
      setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const password1 = (event) => {
    const password = document.querySelector("#password1");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    type === "password"
      ? event.target.setAttribute("class", "bi-eye-slash")
      : event.target.setAttribute("class", "bi-eye");
  };

  const password2 = (event) => {
    const password = document.querySelector("#password2");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    type === "password"
      ? event.target.setAttribute("class", "bi-eye-slash")
      : event.target.setAttribute("class", "bi-eye");
  };

  const password3 = (event) => {
    const password = document.querySelector("#password3");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    type === "password"
      ? event.target.setAttribute("class", "bi-eye-slash")
      : event.target.setAttribute("class", "bi-eye");
  };

  console.log(form);
  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <label className="transfer-label p-0">Change Password</label>
        </div>
        <div className="row m-0 mt-4">
          <p className="p-0 personalInfo-text">
            You must enter your current password and then type your new password
            twice.
          </p>
        </div>
        <form
          className="form row mt-3 pb-4 m-0 d-flex justify-content-center row-cols-1 g-4"
          onSubmit={handleSubmit}
        >
          <div className="col d-grid col-7">
            <div className="input-group mb-3 mt-2">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Current Password"
                aria-label="Username"
                id="password1"
                name="oldPassword"
                value={form.oldPassword}
                aria-describedby="basic-addon1"
                onChange={(event) => handleChangeForm(event)}
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => password1(event)}
                ></i>
              </span>
            </div>
          </div>
          <div className="col d-grid col-7">
            <div className="input-group mb-3 mt-2">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="New Password"
                aria-label="Username"
                id="password2"
                name="newPassword"
                aria-describedby="basic-addon1"
                value={form.newPassword}
                onChange={(event) => handleChangeForm(event)}
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => password2(event)}
                ></i>
              </span>
            </div>
          </div>
          <div className="col d-grid col-7">
            <div className="input-group mb-3 mt-2">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Confirm New Password"
                aria-label="Username"
                id="password3"
                name="confirmPassword"
                aria-describedby="basic-addon1"
                value={form.confirmPassword}
                onChange={(event) => handleChangeForm(event)}
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => password3(event)}
                ></i>
              </span>
            </div>
          </div>
          <div className="col d-grid col-7 mt-5">
            <button className="btn btn-secondary border-0 d-flex justify-content-center profile-btn">
              Change Password
              {/* <i className="bi bi-arrow-right" style={{ color: "#4D4B57" }}></i> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

ChangePassword.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
