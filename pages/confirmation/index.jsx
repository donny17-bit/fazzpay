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
import { useRouter } from "next/router";

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
  const router = useRouter();
  const dispatch = useDispatch();
  const transfer = useSelector((state) => state.transfer);

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

  const handleTransfer = async () => {
    const result = await axios.post(`/transaction/transfer`, dataTransfer);

    // await dispatch(type: )
    console.log(result);
    await dispatch({
      type: "SET_DATA_TRANSFER",
      data: {
        form: { ...dataTransfer, data: result.data.data },
        dataReceiver: receiver,
      },
    });
    router.push("/status");
  };

  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <label className="transfer-label p-0">Transfer To</label>
        </div>
        <div className="row m-0 mt-3">
          <div className="row border m-0 p-4 register-list">
            <div className="col col-2 p-0 transfer-img">
              <img
                src={
                  receiver.image
                    ? process.env.URL_IMAGE + receiver.image
                    : process.env.URL_DEFAULT_IMG
                }
                alt=""
                className="transfer-img"
              />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">{receiver.firstName}</p>
              <p className="m-0 transfer-phone">{receiver.noTelp}</p>
            </div>
          </div>
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
            data={{
              title: "Date & Time",
              content: `${dataTransfer.date
                .toString()
                .slice(
                  0,
                  15
                )} - ${dataTransfer.date.getHours()}.${dataTransfer.date.getMinutes()}`,
            }}
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
            data={dataTransfer}
            handleShow={handleShow}
            handleClose={handleClose}
            handleTransfer={handleTransfer}
          />
        </div>
      </div>
    </>
  );
}

Confirmation.getLayout = function getLayout(page) {
  return <Layout title={"Confirmation - Zwallet"}>{page}</Layout>;
};
