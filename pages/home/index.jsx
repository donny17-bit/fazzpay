import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import BalanceCard from "../../components/balanceCard";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../stores/action/user";

import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    // console.log(dataCookies);
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `/transaction/history?page=${page}&limit=3&filter=MONTH`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    return {
      props: {
        data: result.data.data,
        page: page,
        totalPage: result.data.pagination.totalPage,
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

export default function Home(props) {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/747/747376.png";

  // const [dataUser, setDataUser] = useState({});
  const id = Cookies.get("id");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [history, setHistory] = useState(props.data);
  console.log(history);

  const getDataUser = async () => {
    await dispatch(getUserId(id));
    // const result = await axios.get(`/user/profile/${id}`);
    // console.log(result);
  };

  useEffect(() => {
    if (user.data.length == 0) {
      getDataUser();
    }
  }, []);

  useEffect(() => {
    // pemanggilan reducer untuk menyimpan data user ke redux
    // dispatch({ type: "SET_ALL_DATA_USER", data: props.data });
    setHistory(props.data);
  }, props.data);

  return (
    <>
      <div className="col p-0">
        <BalanceCard />
        <div className="row mt-3 m-0">
          <div className="col border me-3 dashboard-container"></div>
          <div
            className={`col-5 border p-4 ${
              history.length < 3
                ? "dashboard-container1"
                : "dashboard-container"
            }`}
          >
            {/* <div
            className="col-5 border dashboard-container p-4"
           style={{ height: "300px" }}             
          > */}
            <div className="row m-0 ">
              <div className="col p-0">
                <label className="transfer-label p-0">
                  Transaction History
                </label>
              </div>
              <div className="col p-0 d-flex justify-content-end">
                <Link href="/history">
                  <a className="home-link">View All</a>
                </Link>
              </div>
            </div>
            <div className="row m-0 mt-4">
              {history.map((item) => (
                <div className="row m-0 p-2 mt-4 history-list">
                  <div className="col col-2 p-0 transfer-img">
                    <img
                      src={
                        item.image
                          ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${item.image}`
                          : defaultImg
                      }
                      alt=""
                      className="transfer-img"
                    />
                  </div>
                  <div className="col ps-3 pt-2">
                    <p className="mb-2 transfer-name">{item.firstName}</p>
                    <p className="m-0 transfer-phone">{item.type}</p>
                  </div>
                  <div className="col p-0 d-flex justify-content-end">
                    <p
                      className={`align-middle mt-4 ${
                        item.type !== "send"
                          ? "history-price-success"
                          : "history-price-danger"
                      }`}
                    >{`Rp ${item.amount}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(home) {
  return <Layout>{home}</Layout>;
};
