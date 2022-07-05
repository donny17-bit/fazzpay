import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";

import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";
import ReactPaginate from "react-paginate";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    // console.log(dataCookies);
    const params = context.query;
    const filter = !params?.filter ? "MONTH" : params.filter;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `/transaction/history?page=${page}&limit=10&filter=${filter}`,
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
  const [data, setData] = useState(props.data);

  const [filter, setFilter] = useState();
  console.log(data);

  const [totalPage, setTotalPage] = useState([]);

  useEffect(() => {
    // pemanggilan reducer untuk menyimpan data user ke redux
    // dispatch({ type: "SET_ALL_DATA_USER", data: props.data });
    setData(props.data);
    setTotalPage(props.totalPage);
  }, [props.data]);

  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <div className="col p-0">
            <label className="transfer-label p-0">Transaction History</label>
          </div>
          <div className="col p-0 d-flex justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="secondary">
                {filter ? filter : "--Select Filter--"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setFilter("WEEK");
                    router.push("/history?filter=WEEK");
                  }}
                >
                  WEEK
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilter("MONTH");
                    router.push("/history?filter=MONTH");
                  }}
                >
                  MONTH
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    setFilter("YEAR");
                    router.push("/history?filter=YEAR");
                  }}
                >
                  YEAR
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row m-0 mt-4">
          {data.map((item) => (
            <div className="row m-0 p-2 mt-4 history-list" key={item.id}>
              <div className="col col-2 p-0 transfer-img">
                <img
                  src={
                    item.image
                      ? process.env.URL_IMAGE + item.image
                      : process.env.URL_DEFAULT_IMG
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
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={(e) => {
                console.log(e.selected + 1);
                router.push(`/history?page=${e.selected + 1}`);
              }}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              pageCount={totalPage}
              previousLabel="<"
              renderOnZeroPageCount={null}
              pageClassName="page-item border-0 me-3"
              pageLinkClassName="page-link border-0"
              previousClassName="page-item border-0"
              previousLinkClassName="page-link border-0 me-3"
              nextClassName="page-item border-0"
              nextLinkClassName="page-link border-0"
              breakClassName="page-item border-0"
              breakLinkClassName="page-link me-3 border-0"
              containerClassName="pagination d-flex justify-content-center mt-5 pt-4"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </>
  );
}

History.getLayout = function getLayout(page) {
  return <Layout title={"History - Zwallet"}>{page}</Layout>;
};
