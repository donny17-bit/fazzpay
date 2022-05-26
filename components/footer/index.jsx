import { React } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  return (
    <>
      <nav className="navbar footer-fazzpay">
        <div className="container">
          <p className="mb-0 footer-text1">2020 Zwallet. All right reserved.</p>
          <div className="row row-cols-2 footer-text2">
            <div className="col ps-0">
              <p className="mb-0">+62 5637 8882 9901</p>
            </div>
            <div className="col mb-0">
              <p className="mb-0">contact@zwallet.com</p>
            </div>
          </div>
          {/* <div className="   row row-cols-4 navbar-row justify-content-end">
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
          </div> */}
        </div>
      </nav>
    </>
  );
}
