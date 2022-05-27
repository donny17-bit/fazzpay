import React from "react";
import Layout from "../../components/layout";
import SideMenu from "../../components/sideMenu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container pt-5 mb-5" style={{ height: "700px" }}>
        <div className="row">
          {/* left side */}
          <SideMenu />
          <div className="col border p-0" style={{ height: "600px" }}>
            {/* balance card */}
            <div className="row m-0 border p-4 balance-container">
              <div className="col p-0">
                <p className="balance-text">Balance</p>
                <p className="balance-amount">Rp 150.000</p>
                <p className="balance-phone pt-2 m-0">+62 813-9387-7946</p>
              </div>
              <div className="col d-grid p-0 justify-content-end">
                <button className="btn btn-primary balance-button">
                  <i className="bi bi-arrow-up balance-icon"></i> Transfer
                </button>
                <button className="btn btn-primary mt-4 balance-button">
                  <i className="bi bi-plus-lg balance-icon"></i> Top up
                </button>
              </div>
            </div>
            <div className="row border">
              <div className="col border" style={{ height: "300px" }}></div>
              <div className="col border" style={{ height: "300px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(home) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {home}
    </Layout>
  );
};
