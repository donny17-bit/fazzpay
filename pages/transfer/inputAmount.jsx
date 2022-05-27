import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";

export default function InputAmount() {
  return (
    <>
      <div className="col border p-5 main-content main-content-inputAmount">
        <div className="row m-0">
          {" "}
          <label className="transfer-label p-0">Transfer Money</label>
        </div>
        <div className="row m-0 mt-4">
          <div className="row border m-0 p-4 mt-4 register-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
          </div>
        </div>
        <p className="mt-4 inputAmount-text">
          Type the amount you want to transfer and then press continue to the
          next steps.
        </p>

        <div className="justify-content-center d-flex inputAmount-input-container">
          <input
            type="text"
            className="form-control inputAmount-input border-0 "
            placeholder="0.00"
          />
        </div>
        <p className="mt-4 inputAmount-balance text-center">
          Rp120.000 Available
        </p>
        <div className="justify-content-center d-flex">
          <div className="input-group mb-3 mt-5 inputAmount-note">
            <span className="input-group-text auth-input" id="basic-addon1">
              <i className="bi bi-pen"></i>
            </span>
            <input
              type="text"
              className="form-control auth-input"
              placeholder="Add some notes"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="justify-content-end d-flex">
          <button
            type="button"
            className="btn btn-primary inputAmount-button border"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

InputAmount.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
