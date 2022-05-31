import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";
// import Image from "/assets/2.png";

export default function Confirmation() {
  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <label className="transfer-label p-0">Transfer To</label>
        </div>
        <div className="row m-0 mt-3">
          <div className="row border m-0 p-4  register-list">
            <div className="col col-2 p-0 transfer-img">
              <img src="/assets/2.png" alt="" />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">Samuel Suhi</p>
              <p className="m-0 transfer-phone">+62 813-8492-9994</p>
            </div>
          </div>
          {/* <List
            data={{
              image: "/assets/2.png",
              title: "First Name",
              content: "Robert",
            }}
          /> */}
          <div className="row m-0">
            <label className="transfer-label p-0 mt-5">Details</label>
          </div>
          <List data={{ title: "Amount", content: "Rp100.000" }} />
          <List data={{ title: "Balance Left", content: "Rp20.000" }} />
          <List
            data={{ title: "Date & Time", content: "May 11, 2020 - 12.20" }}
          />
          <List data={{ title: "Notes", content: "For buying some socks" }} />
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
      </div>
    </>
  );
}

Confirmation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
