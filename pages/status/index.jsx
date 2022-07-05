import React, { useState } from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";
// import Image from "/assets/2.png";
import { useSelector } from "react-redux";

import cookies from "next-cookies";
import axiosServer from "../../utils/axiosServer";
import axios from "../../utils/axios";
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

export default function Status(props) {
  const router = useRouter();
  const transfer = useSelector((state) => state.transfer);

  const [receiver, setReceiver] = useState(transfer.data.dataReceiver);
  const [dataTransfer, setDataTransfer] = useState(transfer.data.form);
  const [sender, setSender] = useState(props.data);

  const getPdf = async () => {
    const result = await axios.get(
      `export/transaction/${dataTransfer.data.id}`
    );
    window.open(result.data.data.url);
  };

  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0 text-center">
          <i className="bi bi-check-circle-fill status-icon"></i>
        </div>
        <div className="row m-0 text-center">
          <label className="transfer-label p-0">Transfer Success</label>
        </div>
        <div className="row m-0 mt-5">
          <List
            data={{ title: "Amount", content: `Rp ${dataTransfer.amount}` }}
          />
          <List
            data={{ title: "Balance Left", content: `Rp ${sender.balance}` }}
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
          <div className="row m-0">
            <label className="transfer-label p-0 mt-5">Transfer to</label>
          </div>
          <div className="row border m-0 p-4 mt-4 register-list">
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
          <div className="justify-content-end d-flex status-btn">
            <button
              type="button"
              className="btn btn-secondary status-buttonPDF border me-3"
              onClick={() => {
                getPdf();
              }}
            >
              <i className="bi bi-download pe-3 status-download"></i>
              Download PDF
            </button>
            <button
              type="button"
              onClick={() => {
                router.push("/home");
              }}
              className="btn btn-primary inputAmount-button border"
            >
              Back to Home
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
