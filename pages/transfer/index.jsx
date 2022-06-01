import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import axiosServer from "../../utils/axiosServer";
import axiosClient from "../../utils/axios";
import React, { useEffect, useState } from "react";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);

    const params = context.query;
    const search = !params?.search ? "" : params.search;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `user?page=${page}&limit=5&search=${search}&sort=firstName ASC`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    // console.log(result);
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

export default function Transfer(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(props);
  let totalPage = [];
  const [search, setSearch] = useState("");

  for (let i = 0; i < props.totalPage; i++) {
    totalPage.push(i);
  }
  const [data, setData] = useState(props.data);
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/747/747376.png";

  // console.log(totalPage);

  const handleClick = (index) => {
    router.push(`/transfer/${index}`);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key == "Enter") {
      router.push(`/transfer?search=${search}`);
    }
  };

  console.log(search);
  useEffect(() => {
    // pemanggilan reducer untuk menyimpan data user ke redux
    dispatch({ type: "SET_ALL_DATA_USER", data: props.data });
    setData(props.data);
  }, props.data);

  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <label className="transfer-label p-0">Search Reciever</label>
        </div>
        <div className="row m-0 mt-4">
          {/* search input */}
          <div className="input-group mb-5 p-0 border transfer-search">
            <span className="input-group-text transfer-search-icon border-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control transfer-search-input border-0"
              placeholder="Search receiver here"
              onChange={(event) => handleChange(event)}
              onKeyPress={(event) => handleKey(event)}
            />
          </div>

          {/* list data */}
          {data.map((item, index) => (
            <div
              className="row border m-0 p-4 mt-4 register-list transfer-list"
              key={item.id}
              onClick={() => handleClick(index)}
            >
              <div className="col col-2 p-0 transfer-img">
                <img
                  src={item.image ? item.image : defaultImg}
                  alt=""
                  className="transfer-img"
                />
              </div>
              <div className="col ps-3 pt-2">
                <p className="mb-2 transfer-name">{item.firstName}</p>
                <p className="m-0 transfer-phone">{item.noTelp}</p>
              </div>
            </div>
          ))}

          {/* pagination blm sempurna */}
          <div className="row m-0 p-1 mt-4 register-list text-center justify-content-center">
            <div className="col col-2 p-0 transfer-img d-grid">
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  router.push(`/transfer?page=1`);
                }}
              >
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
                          router.push(`/transfer?page=${item + 1}`);
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

Transfer.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
