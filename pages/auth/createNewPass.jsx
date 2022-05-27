import { React } from "react";
import Link from "next/link";

function CreateNewPass() {
  const handlePassword = (event) => {
    const password = document.querySelector("#password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    type === "password"
      ? event.target.setAttribute("class", "bi-eye-slash")
      : event.target.setAttribute("class", "bi-eye");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col auth-banner ">
          <h2 className="auth-title ">Zwallet</h2>
          {/* <Image /> */}
          <div className="auth-phone-group text-center">
            <img
              src="/assets/png-phone2.png"
              alt=""
              className="img-fluid auth-phone1 "
            />
            <img
              src="/assets/png-phone.png"
              alt=""
              className="img-fluid auth-phone2 "
            />
          </div>
          <h2 className="auth-title ">App that Covering Banking Needs.</h2>
          <p className="auth-text mt-5">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage
          </p>
        </div>
        <div className="col-sm-5 auth-form-login">
          <h2 className="auth-form-title">
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </h2>
          <p className="auth-form-subtitle mt-4">
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
          <form action="" className="form">
            <div className="input-group mb-3 mt-5">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Create new password"
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
            <div className="input-group mb-3 mt-5">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Confirm new password"
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
            <div className="d-grid gap-2 mt-5">
              <button className="btn btn-secondary auth-button-pin">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPass;