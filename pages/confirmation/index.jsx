import React, { useState } from "react";
import Layout from "../../components/layout";
import Link from "next/link";
import List from "../../components/list/list";
import ModalPin from "../../components/modalPin";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../stores/action/user";

import axios from "../../utils/axios";
import axiosServer from "../../utils/axiosServer";
import Cookies from "js-cookie";
import cookies from "next-cookies";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const idSender = dataCookies.id;

    const result = await axiosServer.get(`user/profile/${idSender}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });

    return {
      props: {
        data: result.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination:
          error.response.status === 403
            ? "/auth/login"
            : `/error?msg=${error.response.data.msg}`,
        permanent: false,
      },
    };
  }
}

export default function Confirmation(props) {
  const transfer = useSelector((state) => state.transfer);
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/747/747376.png";

  const [receiver, setReceiver] = useState(transfer.data.dataReceiver);
  const [dataTransfer, setDataTransfer] = useState(transfer.data.form);
  const [sender, setSender] = useState(props.data);
  // const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(receiver);
  console.log(sender);
  console.log(dataTransfer);

  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <label className="transfer-label p-0">Transfer To</label>
        </div>
        <div className="row m-0 mt-3">
          <div className="row border m-0 p-4  register-list">
            <div className="col col-2 p-0 transfer-img">
              <img
                src={receiver.image ? receiver.image : defaultImg}
                alt=""
                className="transfer-img"
              />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">{receiver.firstName}</p>
              <p className="m-0 transfer-phone">{receiver.noTelp}</p>
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
          <List
            data={{ title: "Amount", content: `Rp ${dataTransfer.amount}` }}
          />
          <List
            data={{
              title: "Balance Left",
              content: `Rp ${sender.balance - dataTransfer.amount}`,
            }}
          />
          <List
            // time & data msh static
            data={{ title: "Date & Time", content: "May 11, 2020 - 12.20" }}
          />
          <List data={{ title: "Notes", content: `${dataTransfer.notes}` }} />
          <div className="justify-content-end d-flex">
            <button
              type="button"
              onClick={handleShow}
              className="btn btn-primary inputAmount-button border"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Continue
            </button>
          </div>
          <ModalPin
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}

Confirmation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
