import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "../../utils/axios";

function Register() {
  const router = useRouter();
  const [form, setForm] = useState({});

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post("auth/register", form);
      alert(result.data.msg + ", silahkan verifikasi email lalu login");
      await router.push("/login");
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };

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
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group mt-5">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-person"></i>
              </span>
              <input
                type="text"
                name="firstName"
                className="form-control auth-input"
                placeholder="Enter your firstname"
                onChange={(event) => handleChangeForm(event)}
              />
            </div>
            <div className="input-group mt-4">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-person"></i>
              </span>
              <input
                type="text"
                name="lastName"
                className="form-control auth-input"
                placeholder="Enter your lastname"
                onChange={(event) => handleChangeForm(event)}
              />
            </div>
            <div className="input-group mt-4">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-envelope"></i>
              </span>
              <input
                type="text"
                name="email"
                className="form-control auth-input"
                placeholder="Enter your Email"
                onChange={(event) => handleChangeForm(event)}
              />
            </div>
            <div className="input-group mt-4">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control auth-input"
                placeholder="Create your password"
                id="password"
                onChange={(event) => handleChangeForm(event)}
              />
              <span className="input-group-text auth-input" id="basic-addon1">
                <i
                  className="bi-eye-slash auth-pass"
                  onClick={(event) => handlePassword(event)}
                ></i>
              </span>
            </div>
            <div className="d-grid gap-2 mt-5">
              <button
                type="submit"
                className="btn btn-secondary auth-button-register"
              >
                Register
              </button>
            </div>

            <p className="text-center mt-4 auth-signup">
              Already have an account? Let's{" "}
              <Link href="/login">
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
