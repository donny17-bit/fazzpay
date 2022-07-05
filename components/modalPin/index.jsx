import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import axios from "../../utils/axios";

export default function ModalPin(props) {
  const [pin, setPin] = useState();

  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  // allert belum
  // const alert = (message, type) => {
  //   const wrapper = document.createElement("div");
  //   wrapper.innerHTML = [
  //     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
  //     `   <div>${message}</div>`,
  //     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
  //     "</div>",
  //   ].join("");

  //   alertPlaceholder.append(wrapper);
  // };

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

      // cek pin
      await axios.get(`user/pin?pin=${allPin}`);

      props.handleTransfer();
      // const result = await axios.
      // console.log(result);
      // alihin ke sukses create pin page
    } catch (error) {
      console.log(error);
      alert("Wrong PIN");
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter PIN to Transfer</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            Enter your 6 digits PIN for confirmation to continue transfering
            money
            <div id="liveAlertPlaceholder mt-3">
              {/* <div className="alert alert-danger mt-3" role="alert" id="alert">
                Wrong PIN
              </div> */}
            </div>
            <div className="row mt-4 row-cols-6 auth-pin-row p-2 justify-content-center">
              <div className="col border status-pin-col me-2">
                <input
                  type="text"
                  className="form-control auth-input-pin pe-0"
                  maxLength={1}
                  id="pin-1"
                  name="1"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border status-pin-col me-2">
                <input
                  type="text"
                  className="form-control auth-input-pin pe-0"
                  maxLength={1}
                  id="pin-2"
                  name="2"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border status-pin-col me-2">
                <input
                  type="text"
                  className="form-control auth-input-pin  pe-0"
                  maxLength={1}
                  id="pin-3"
                  name="3"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border status-pin-col me-2">
                <input
                  type="text"
                  className="form-control auth-input-pin  pe-0"
                  maxLength={1}
                  id="pin-4"
                  name="4"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border status-pin-col me-2">
                <input
                  type="text"
                  className="form-control auth-input-pin  pe-0"
                  maxLength={1}
                  id="pin-5"
                  name="5"
                  placeholder=""
                  onChange={(event) => handleChange(event)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col border status-pin-col me-2">
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
