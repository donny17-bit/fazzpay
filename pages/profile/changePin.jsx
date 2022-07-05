import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";

export default function ChangePin() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState(user.data);
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });

  console.log(pin);
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
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const allPin =
        pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

      // console.log(allPin);
      // const pinForm = parseInt(allPin);

      // console.log(typeof pinForm);
      const result = await axios.patch(`user/pin/${data.id}`, { pin: allPin });
      console.log(result);
      alert(result.data.msg);
      resetPin();
    } catch (error) {
      console.log(error);
    }
  };

  const resetPin = () => {
    setPin({
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      pin6: "",
    });
  };

  return (
    <>
      <div className="col border p-5 main-content" style={{ height: "600px" }}>
        <div className="row m-0">
          <label className="transfer-label p-0">Change PIN</label>
        </div>
        <div className="row m-0 mt-4">
          <p className="p-0 personalInfo-text">
            Type your new 6 digits security PIN to use in Zwallet.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form row mt-3 pb-4 m-0 d-flex justify-content-center row-cols-1 g-4"
        >
          <div className="row row-cols-7 justify-content-center auth-pin-row mt-5">
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                maxLength={1}
                id="pin-1"
                name="1"
                value={pin.pin1}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                maxLength={1}
                id="pin-2"
                name="2"
                value={pin.pin2}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                maxLength={1}
                id="pin-3"
                name="3"
                value={pin.pin3}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                maxLength={1}
                id="pin-4"
                name="4"
                value={pin.pin4}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                maxLength={1}
                id="pin-5"
                name="5"
                value={pin.pin5}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                maxLength={1}
                id="pin-6"
                name="6"
                value={pin.pin6}
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <div className="col d-grid col-7 mt-5">
            <button className="btn btn-secondary border-0 d-flex justify-content-center profile-btn">
              Change PIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

ChangePin.getLayout = function getLayout(page) {
  return <Layout title={"Change Pin - Zwallet"}>{page}</Layout>;
};
