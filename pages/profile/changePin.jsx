import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";

export default function ChangePin() {
  return (
    <>
      <div className="col border p-5 main-content" style={{ height: "600px" }}>
        <div className="row m-0">
          <label className="transfer-label p-0">Change PIN</label>
        </div>
        <div className="row m-0 mt-4">
          <p className="p-0 personalInfo-text">
            Enter your current 6 digits Zwallet PIN below to continue to the
            next steps.
          </p>
        </div>
        <form className="form row mt-3 pb-4 m-0 d-flex justify-content-center row-cols-1 g-4">
          <div className="row row-cols-7 justify-content-center auth-pin-row mt-5">
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col col-1 border me-3 changePin-col">
              <input
                type="text"
                className="form-control auth-input-pin"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col d-grid col-7 mt-5">
            <button className="btn btn-secondary border-0 d-flex justify-content-center profile-btn">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

ChangePin.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
