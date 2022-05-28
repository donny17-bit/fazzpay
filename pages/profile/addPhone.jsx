import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";

export default function AddPhone() {
  return (
    <>
      <div className="col border p-5 main-content" style={{ height: "600px" }}>
        <div className="row m-0">
          <label className="transfer-label p-0">Add Phone Number</label>
        </div>
        <div className="row m-0 mt-4">
          <p className="p-0 personalInfo-text">
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </p>
        </div>
        <form className="form row mt-3 pb-4 m-0 d-flex justify-content-center row-cols-1 g-4">
          <div className="col d-grid col-7">
            <div className="input-group mb-3 mt-2">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi bi-telephone"></i>
              </span>
              <span
                className="input-group-text auth-input p-0"
                id="basic-addon1"
              >
                <p className="p-0 m-0">+62</p>
              </span>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Enter your phone number"
                aria-label="Username"
                id="password"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col d-grid col-7 mt-5">
            <button className="btn btn-secondary border-0 d-flex justify-content-center profile-btn">
              Add Phone Number
              {/* <i className="bi bi-arrow-right" style={{ color: "#4D4B57" }}></i> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

AddPhone.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
