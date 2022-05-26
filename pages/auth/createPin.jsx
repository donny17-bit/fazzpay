import { React } from "react";
import Link from "next/link";

function CreatePin() {
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
            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
            That You Created Yourself.
          </h2>
          <p className="auth-form-subtitle mt-4">
            Create 6 digits pin to secure all your money and your data in
            Zwallet app. Keep it secret and don’t tell anyone about your Zwallet
            account password and the PIN.
          </p>
          <form action="" className="form">
            <div className="row auth-pin-row mt-5">
              <div className="col border me-3 auth-pin-col text-center">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="d-grid gap-2 mt-5">
              <button className="btn btn-secondary auth-button-pin">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePin;
