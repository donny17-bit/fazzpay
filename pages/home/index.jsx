import React from "react";
import Layout from "../../components/layout";
import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import BalanceCard from "../../components/balanceCard";

export default function Home() {
  return (
    <>
      <div className="col border p-0">
        {/* balance card */}

        <div className="row border">
          <div className="col border" style={{ height: "300px" }}></div>
          <div className="col border" style={{ height: "300px" }}></div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(home) {
  return (
    <Layout>
      <BalanceCard />
      {home}
    </Layout>
  );
};
