import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";

export default function History() {
  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <div className="col p-0">
            <label className="transfer-label p-0">Transaction History</label>
          </div>
          <div className="col  p-0 d-flex justify-content-end">
            <button className="btn btn-secondary history-btn border-0">
              --Select Filter--
            </button>
          </div>
        </div>
        <div className="row m-0 mt-4">
          <div className="row m-0 p-2 mt-4 history-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
            <div className="col p-0 d-flex justify-content-end">
              <p className="align-middle mt-4 history-price">Rp50.000</p>
            </div>
          </div>
          <div className="row m-0 p-2 mt-4 history-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
            <div className="col p-0 d-flex justify-content-end">
              <p className="align-middle mt-4 history-price">Rp50.000</p>
            </div>
          </div>
          <div className="row m-0 p-2 mt-4 history-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
            <div className="col p-0 d-flex justify-content-end">
              <p className="align-middle mt-4 history-price">Rp50.000</p>
            </div>
          </div>
          <div className="row m-0 p-2 mt-4 history-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
            <div className="col p-0 d-flex justify-content-end">
              <p className="align-middle mt-4 history-price">Rp50.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

History.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
