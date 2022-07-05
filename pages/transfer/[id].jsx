import React, { useState } from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import { useRouter } from "next/router";
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
    const index = context.query.id;
    const idSender = dataCookies.id;
    // console.log(context.query.id);
    // console.log(dataCookies.token);

    // const resultSender = await axiosServer.get(`user/profile/${idSender}`, {
    //   header: {
    //     Authorization: `Bearer ${dataCookies.token}`,
    //   },
    // });

    const result = await axiosServer.get(`user/profile/${idSender}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });

    // console.log(resultSender);
    return {
      props: {
        index: index,
        data: result.data.data,
        // dataSender: resultSender.data.data,
      },
    };
  } catch (error) {
    // console.log(error.response);
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

export default function InputAmount(props) {
  const date = new Date();
  const router = useRouter();
  const dispatch = useDispatch();

  const transfer = useSelector((state) => state.transfer);

  console.log(transfer.data[props.index]);
  console.log(transfer);
  // console.log(Cookies.get("id"));

  // console.log(router.query.id);

  const [data, setData] = useState(transfer.data[props.index]);
  const [dataSender, setDataSender] = useState(props.data);
  const [form, setForm] = useState({
    receiverId: data.id,
    amount: "",
    notes: "",
    date: date,
  });

  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch({
      type: "SET_DATA_TRANSFER",
      data: { form: form, dataReceiver: data },
    });
    // await dispatch({ type: "SET_DATA_RECEIVER", data: data });
    router.push("/confirmation");
  };

  // console.log(form);
  const getUserSender = async () => {
    // const result  = await dispatch(getUserId(Cookies.get(id)))
  };

  // const getUser = async () => {
  //   const result = await dispatch(getUserId(router.query.id));
  //   // setData({
  //   //   data: dispatch(getUserId(router.query.id)),
  //   // });
  //   console.log(result.value.data.data);
  //   setData({ data: result.value.data.data });
  // };

  // console.log(data);
  // console.log(dataSender);

  // useEffect(() => {
  //   // getUser();
  //   // pemanggilan reducer untuk menyimpan data user ke redux
  //   // setData({
  //   //   data: dispatch({
  //   //     type: "GET_USERID",
  //   //     payload: axios.get(`user/profile/${router.query.id}`),
  //   //   }),
  //   // });
  //   // setDataSender(props.dataSender);
  //   setData(props.data);
  // }, props.data);

  return (
    <>
      <div className="col border p-5 main-content main-content-inputAmount">
        <div className="row m-0">
          <label className="transfer-label p-0">Transfer Money</label>
        </div>
        <div className="row m-0 mt-4">
          <div className="row border m-0 p-4 mt-4 register-list">
            <div className="col col-2 p-0 transfer-img">
              <img
                src={
                  data.image
                    ? process.env.URL_IMAGE + data.image
                    : process.env.URL_DEFAULT_IMG
                }
                alt=""
                className="transfer-img"
              />
            </div>
            <div className="col ps-3 pt-2">
              <p className="mb-2 transfer-name">{data.firstName}</p>
              <p className="m-0 transfer-phone">{data.noTelp}</p>
            </div>
          </div>
        </div>
        <p className="mt-4 inputAmount-text">
          Type the amount you want to transfer and then press continue to the
          next steps.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="justify-content-center d-flex inputAmount-input-container">
            <input
              type="text"
              name="amount"
              className="form-control inputAmount-input border-0 "
              placeholder="0.00"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <p className="mt-4 inputAmount-balance text-center">
            {`Rp ${dataSender.balance} Available`}
          </p>
          <div className="justify-content-center d-flex">
            <div className="input-group mb-3 mt-5 inputAmount-note">
              <span className="input-group-text auth-input" id="basic-addon1">
                <i className="bi bi-pen"></i>
              </span>
              <input
                type="text"
                name="notes"
                className="form-control auth-input"
                placeholder="Add some notes"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <div className="justify-content-end d-flex">
            <button
              type="submit"
              className="btn btn-primary inputAmount-button border"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

InputAmount.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
