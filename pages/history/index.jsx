import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import { useRouter } from "next/router";

import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    // console.log(dataCookies);
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `/transaction/history?page=${page}&limit=10&filter=MONTH`,
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

export default function History(props) {
  const router = useRouter();
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/747/747376.png";
  const [data, setData] = useState(props.data);

  console.log(data);

  let totalPage = [];
  for (let i = 0; i < props.totalPage; i++) {
    totalPage.push(i);
  }

  useEffect(() => {
    // pemanggilan reducer untuk menyimpan data user ke redux
    // dispatch({ type: "SET_ALL_DATA_USER", data: props.data });
    setData(props.data);
  }, props.data);

  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <div className="col p-0">
            <label className="transfer-label p-0">Transaction History</label>
          </div>
          <div className="col  p-0 d-flex justify-content-end">
            <button className="btn btn-secondary history-btn border-0">
              --Select Filter--
            </button>
          </div>
        </div>
        <div className="row m-0 mt-4">
          {data.map((item) => (
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
          <div className="row justify-content-center m-0 mt-4">
            <div className="col col-2 p-0 transfer-img d-grid">
              <button className="btn btn-outline-primary">
                <i className="bi bi-arrow-left" style={{ color: "blue" }}></i>
              </button>
            </div>
            {
              // totalPage
              totalPage.map((item, index) => {
                if (index >= 5) {
                  return "";
                } else {
                  return (
                    <div className="col col-2 p-0 transfer-img d-grid">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                          router.push(`/history?page=${item + 1}`);
                        }}
                      >
                        {item + 1}
                      </button>
                    </div>
                  );
                }
              })
            }
            <div className="col col-2 p-0 transfer-img d-grid">
              <button className="btn btn-outline-primary">
                <i className="bi bi-arrow-right" style={{ color: "blue" }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

History.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
