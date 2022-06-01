import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import ModalTopup from "../modalTopup";
import { useState } from "react";

function SideMenu() {
  const router = useRouter();
  const page = router.route;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTopup = (event) => {
    event.preventDefault();

    // event.target.class = "menu-link-active";
    setShow(true);
    // console.log(event.target.class);
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    const result = await axios.post("/auth/logout");
    console.log(result);

    Cookies.remove("id");
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <>
      <div className="col-3 me-3 ps-0 pe-0 pt-5 border menu-container">
        <div
          className={`${
            page == "/home" ? "menu-item-active" : "menu-item"
          } col border-start pt-1 border-5 ps-5`}
        >
          <Link href="/home">
            <a className={page == "/home" ? "menu-link-active" : "menu-link"}>
              <i
                className={`bi bi-columns-gap me-4 align-middle ${
                  page == "/home" ? "menu-icon-active" : "menu-icon"
                } `}
              ></i>
              Dashboard
            </a>
          </Link>
        </div>
        <div
          className={`${
            page == "/transfer" ? "menu-item-active" : "menu-item"
          } col border-start pt-1 mt-5 border-5 ps-5`}
        >
          <Link href="/transfer">
            <a
              className={page == "/transfer" ? "menu-link-active" : "menu-link"}
            >
              <i
                className={`${
                  page == "/transfer" ? "menu-icon-active" : "menu-icon"
                } bi bi-arrow-up me-4 align-middle `}
              ></i>
              Transfer
            </a>
          </Link>
        </div>

        <div className="menu-item col mt-5 border-start pt-1 border-5 ps-5">
          <button
            id="topup"
            className="btn btn-link p-0 menu-btn"
            onClick={(event) => handleTopup(event)}
          >
            <a className="menu-link ">
              <i className="bi bi-plus-lg me-4 align-middle menu-icon"></i>
              Top up
            </a>
          </button>
          <ModalTopup
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </div>
        <div
          className={`${
            page == "/profile" ? "menu-item-active" : "menu-item"
          } col border-start pt-1 mt-5 border-5 ps-5`}
        >
          <Link href="/profile">
            <a
              className={page == "/profile" ? "menu-link-active" : "menu-link"}
            >
              <i
                className={`${
                  page == "/profile" ? "menu-icon-active" : "menu-icon"
                } bi bi-person me-4 align-middle `}
              ></i>
              Profile
            </a>
          </Link>
        </div>
        <div className="menu-item-logout col mt-5 border-start pt-1 border-5 ps-5">
          <button
            onClick={(event) => handleLogout(event)}
            className="btn btn-link p-0 menu-btn"
          >
            {/* <Link href="/login"> */}
            <a className="menu-link">
              <i className="bi bi-box-arrow-right me-4 align-middle menu-icon"></i>{" "}
              Logout
            </a>
            {/* </Link> */}
          </button>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
