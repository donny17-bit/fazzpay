import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import axios from "../../utils/axios";
import { useRouter } from "next/router";

export default function ModalTopup(props) {
  const router = useRouter();
  const [amount, setAmount] = useState({
    amount: "",
  });

  // const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

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
    setAmount({ ...amount, [event.target.name]: event.target.value });
  };

  console.log(amount);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      console.log(amount);
      const result = await axios.post(`transaction/top-up`, amount);

      const redirectURL = result.data.data.redirectUrl;
      // props.handleTransfer();
      // const result = await axios.
      // console.log(result.data.data);
      // console.log(result.data.data.redirectUrl);
      alert("Please Pay Top up");
      window.open(redirectURL);
      // router.push(redirectURL);

      // alihin ke sukses create pin page
    } catch (error) {
      console.log(error);
      // alert("Wrong PIN");
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Top Up</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            Enter the amount of money, and click submit.
            <div id="liveAlertPlaceholder mt-3">
              {/* <div className="alert alert-danger mt-3" role="alert" id="alert">
                Wrong PIN
              </div> */}
            </div>
            <div className="row mt-4 auth-pin-row p-2">
              <div className="col border auth-pin-col">
                <input
                  type="text"
                  className="form-control auth-input-pin pe-0 text-center"
                  name="amount"
                  placeholder="0.00"
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
