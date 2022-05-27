import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";

export default function Transfer() {
  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          {" "}
          <label className="transfer-label p-0">Search Reciever</label>
        </div>
        <div className="row m-0 mt-4">
          <div className="input-group mb-5 p-0 border transfer-search">
            <span className="input-group-text transfer-search-icon border-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control transfer-search-input border-0"
              placeholder="Search receiver here"
            />
          </div>
          <div className="row border m-0 p-4 mt-4 register-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
          </div>
          <div className="row border m-0 p-4 mt-4 register-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
          </div>
          <div className="row border m-0 p-4 mt-4 register-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
          </div>
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
      </div>
    </>
  );
}

Transfer.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
