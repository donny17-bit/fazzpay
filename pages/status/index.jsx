import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";
// import Image from "/assets/2.png";

export default function Status() {
  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <label className="transfer-label p-0">Transfer To</label>
        </div>
        <div className="row m-0 mt-3">
          <List
            data={{
              image: "/assets/2.png",
              title: "First Name",
              content: "Robert",
            }}
          />
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

Status.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
