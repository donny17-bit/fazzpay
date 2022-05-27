import React from "react";
import Link from "next/link";

function SideMenu() {
  return (
    <>
      {" "}
      <div className="col-3 me-3 ps-0 pe-0 pt-5 border menu-container">
        <div className="menu-item-active col border-start pt-1 border-5 ps-5">
          <Link href="#">
            <a className="menu-link-active">
              <i className="bi bi-columns-gap me-4 align-middle menu-icon-active"></i>{" "}
              Dashboard
            </a>
          </Link>
        </div>
        <div className="menu-item col mt-5 border-start pt-1 border-5 ps-5">
          <Link href="#">
            <a className="menu-link">
              <i className="bi bi-arrow-up me-4 align-middle menu-icon"></i>{" "}
              Transfer
            </a>
          </Link>
        </div>
        <div className="menu-item col mt-5 border-start pt-1 border-5 ps-5">
          <Link href="#">
            <a className="menu-link">
              <i className="bi bi-plus-lg me-4 align-middle menu-icon"></i> Top
              up
            </a>
          </Link>
        </div>
        <div className="menu-item col mt-5 border-start pt-1 border-5 ps-5">
          <Link href="#">
            <a className="menu-link">
              <i className="bi bi-person me-4 align-middle menu-icon"></i>{" "}
              Profile
            </a>
          </Link>
        </div>
        <div className="menu-item-logout col mt-5 border-start pt-1 border-5 ps-5">
          <Link href="#">
            <a className="menu-link">
              <i className="bi bi-box-arrow-right me-4 align-middle menu-icon"></i>{" "}
              Logout
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
