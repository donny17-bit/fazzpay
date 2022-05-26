import { React } from "react";
import Link from "next/link";

function Register() {
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
        <div className="col-sm-5 auth-form-register">
          <h2 className="auth-form-title">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h2>
          <p className="auth-form-subtitle mt-4">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form action="" className="form">
            <div className="input-group mt-5">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-person"></i>
              </span>
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Enter your firstname"
              />
            </div>
            <div className="input-group mt-4">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-person"></i>
              </span>
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Enter your lastname"
              />
            </div>
            <div className="input-group mt-4">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-envelope"></i>
              </span>
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Enter your Email"
              />
            </div>
            <div className="input-group mt-4">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Create your password"
                id="password"
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => handlePassword(event)}
                ></i>
              </span>
            </div>
            <div className="d-grid gap-2 mt-5">
              <button className="btn btn-secondary auth-button-register">
                Register
              </button>
            </div>

            <p className="text-center mt-4 auth-signup">
              Already have an account? Let's{" "}
              <Link href="#">
                <a className="auth-link">Login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
