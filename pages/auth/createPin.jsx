import Link from "next/link";
import React, { useState } from "react";
import axios from "../../utils/axios";
import Cookies from "js-cookie";

function CreatePin() {
  // const pin = [];
  const [pin, setPin] = useState();

  const handleChange = (event) => {
    if (event.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(event.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
    // pin.push(`${event.target.value}`);
  };

  // pin belum jadi
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const allPin =
        pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

      console.log(allPin);
      const pinForm = parseInt(allPin);

      // ubah array pin ke string pin
      const id = Cookies.get("id");
      // let pinForm = pin.toString().replaceAll(",", "");
      // pinForm = parseInt(pinForm);

      console.log(typeof pinForm);
      const result = await axios.patch(`user/pin/${id}`, { pin: allPin });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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
          <form onSubmit={handleSubmit} className="form">
            <div className="row row-cols-8 auth-pin-row mt-5">
              <div className="col border me-3 auth-pin-col text-center">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  maxLength={1}
                  id="pin-1"
                  name="1"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  maxLength={1}
                  id="pin-2"
                  name="2"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  maxLength={1}
                  id="pin-3"
                  name="3"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  maxLength={1}
                  id="pin-4"
                  name="4"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin"
                  maxLength={1}
                  id="pin-5"
                  name="5"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border me-3 auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin  pe-0"
                  maxLength={1}
                  id="pin-6"
                  name="6"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="d-grid gap-2 mt-5">
              <button
                type="submit"
                className="btn btn-secondary auth-button-pin"
              >
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
