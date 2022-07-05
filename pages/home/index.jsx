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

import { Bar } from "react-chartjs-2";

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
    const result2 = await axiosServer.get(`/dashboard/${dataCookies.id}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });
    // const result = await axios.get(`/dashboard/${id}`);
    return {
      props: {
        data: [result.data.data, result2.data.data],
        // data: result.data.data,
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
  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      xAxis: {
        display: true,
        grid: {
          display: false,
        },
      },
      yAxis: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const [data, setData] = useState();
  const [listIncome, setListIncome] = useState([]);
  const [listExpense, setListExpense] = useState([]);
  const [labels, setLabels] = useState([]);
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/747/747376.png";
  const id = Cookies.get("id");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [history, setHistory] = useState(props.data);

  const dataDashboard = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        borderRadius: 15,
        data: listIncome,
        backgroundColor: "#6379F4",
        barThickness: 10,
      },
      {
        label: "Expense",
        borderRadius: 15,
        data: listExpense,
        backgroundColor: "#9DA6B5",
        barThickness: 10,
      },
    ],
  };

  const getDataUser = async () => {
    await dispatch(getUserId(id));
  };

  const listDashboard = () => {
    let incomeTemp = [];
    let labelsTemp = [];
    let expenseTemp = [];
    data.listIncome.map((item, index) => {
      incomeTemp = [...incomeTemp, item.total];
      labelsTemp = [...labelsTemp, item.day];
    });
    data.listExpense.map((item) => {
      expenseTemp = [...expenseTemp, item.total];
    });
    setListIncome(incomeTemp);
    setListExpense(expenseTemp);
    setLabels(labelsTemp);
  };

  useEffect(() => {
    if (user.data.length == 0) {
      getDataUser();
    }
  }, []);

  useEffect(() => {
    if (data) {
      listDashboard();
    }
  }, [data]);

  useEffect(() => {
    setHistory(props.data[0]);
  }, props.data[0]);

  useEffect(() => {
    // pemanggilan reducer untuk menyimpan data user ke redux
    // dispatch({ type: "SET_ALL_DATA_USER", data: props.data });
    setData(props.data[1]);
  }, props.data[1]);

  return (
    <>
      <div className="col p-0">
        <BalanceCard />
        <div className="row mt-3 m-0">
          <div className="col border me-3 p-4 dashboard-container">
            <div className="row mb-4">
              <div className="col ps-3">
                <div className="row">
                  <i
                    className={`bi bi-arrow-down-short p-0`}
                    style={{ color: "#1EC15F", fontSize: 30 }}
                  ></i>
                </div>
                <div className="row home-type mb-2 ps-2">Income</div>
                <div className="row home-balance ps-2">
                  Rp {data ? data.totalIncome : ""}
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <i
                    className={`bi bi-arrow-up-short p-0`}
                    style={{ color: "#FF5B37", fontSize: 30 }}
                  ></i>
                </div>
                <div className="row home-type mb-2 ps-2">Expense</div>
                <div className="row home-balance ps-2">
                  Rp {data ? data.totalExpense : ""}
                </div>
              </div>
            </div>
            <div className="row">
              <Bar data={dataDashboard} height={200} options={options} />
            </div>
          </div>
          <div
            className={`col-5 border p-4 ${
              history.length < 3
                ? "dashboard-container1"
                : "dashboard-container"
            }`}
          >
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
