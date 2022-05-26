import { React } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-fazzpay">
        <div className="container ">
          <span className="navbar-title">Zwallet</span>
          <div className="row row-cols-4 navbar-row justify-content-end">
            <div className="col-2">
              <img src="/assets/Rectangle 25.png" alt="" />
            </div>
            <div className="col navbar-col">
              <p className=" navbar-name">Robert Chandler</p>
              <p className=" navbar-phone">+62 8139 3877 7946</p>
            </div>
            <div className="col-2  pt-3">
              <i className="bi-bell" style={{ color: "black" }}></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
