import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";

export default function ChangePassword() {
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
        <form className="form row mt-3 pb-4 m-0 d-flex justify-content-center row-cols-1 g-4">
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
                id="password"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => handlePassword(event)}
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
                id="password"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => handlePassword(event)}
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
                id="password"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => handlePassword(event)}
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
