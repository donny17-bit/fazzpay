import { React } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import SideMenu from "../sideMenu";
import BalanceCard from "../balanceCard";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container pt-5 pb-5">
        <div className="row">
          {/* left side */}
          <SideMenu />
          <div className="col p-0">
            {/* <BalanceCard /> */}
            <main>{children}</main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
