import Link from "next/link";
import React, { useState, useEffect } from "react";
// import axiosApiIntances from "../../utils/axios";
import axios from "../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Head from "next/head";

function Login() {
  const router = useRouter();
  const [form, setForm] = useState({});

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post("auth/login", form);
      Cookies.set("token", result.data.data.token);
      Cookies.set("id", result.data.data.id);

      alert(result.data.msg);
      if (!result.data.data.pin) {
        router.push("/create-pin");
      } else {
        router.push("/home");
      }
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
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
    <>
      <Head>
        <title>Login - Zwallet</title>
      </Head>
      <main>
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
                Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage
              </p>
            </div>
            <div className="col-sm-5 auth-form-login">
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
                <div className="input-group mb-3 mt-5">
                  <span
                    className="input-group-text auth-input"
                    id="basic-addon1"
                  >
                    <i className="bi-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="email"
                    className="form-control auth-input"
                    placeholder="Username"
                    onChange={(event) => handleChangeForm(event)}
                  />
                </div>
                <div className="input-group mb-3 mt-5">
                  <span
                    className="input-group-text auth-input"
                    id="basic-addon1"
                  >
                    <i className="bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control auth-input"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={(event) => handleChangeForm(event)}
                  />
                  <span
                    className="input-group-text auth-input"
                    id="basic-addon1"
                  >
                    <i
                      className="bi-eye-slash auth-pass"
                      onClick={(event) => handlePassword(event)}
                    ></i>
                  </span>
                </div>

                <div className="col text-end">
                  <Link href="/reset-password">
                    <a className="auth-forgot">Forgot password?</a>
                  </Link>
                </div>

                <div className="d-grid gap-2 mt-5">
                  <button
                    className="btn btn-secondary auth-button-login"
                    type="submit"
                  >
                    Login
                  </button>
                </div>

                <p className="text-center mt-5 auth-signup">
                  Don't have account? Let's{" "}
                  <Link href="/register">
                    <a className="auth-link">Sign up</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
