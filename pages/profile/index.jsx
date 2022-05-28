import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="col border p-5 main-content main-content-inputAmount">
        <div className="row  row-cols-1 m-0 justify-content-center d-flex">
          <div className=" col p-0  text-center profile-photo">
            <img src="/assets/2.png" className="" alt="" />
          </div>
          <div className="col p-0  text-center">
            <button className="btn btn-link profile-edit ">
              <i className="bi bi-pen"></i> Edit
            </button>
          </div>
        </div>
        <div className="row mt-4  m-0">
          <label className=" profile-name">Robert Chandler</label>
          <p className=" profile-phone"> +62 813-9387-7946</p>
        </div>
        <div className="row mt-5 m-0 d-flex justify-content-center row-cols-1 g-4">
          <div className="col d-grid col-7">
            <button className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
              Personal Information
              <i className="bi bi-arrow-right profile-icon"></i>
            </button>
          </div>
          <div className="col d-grid col-7">
            <button className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
              Change Password
              <i className="bi bi-arrow-right profile-icon"></i>
            </button>
          </div>
          <div className="col d-grid col-7">
            <button className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
              Change Pin
              <i className="bi bi-arrow-right profile-icon"></i>
            </button>
          </div>

          <div className="col d-grid col-7">
            <button className="btn btn-secondary border-0 d-flex justify-content-between profile-btn">
              Logout
              {/* <i className="bi bi-arrow-right" style={{ color: "#4D4B57" }}></i> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
