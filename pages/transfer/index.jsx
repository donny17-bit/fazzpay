import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import axiosServer from "../../utils/axiosServer";
import axiosClient from "../../utils/axios";
import React, { useEffect, useState } from "react";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);

    const params = context.query;
    const search = !params?.search ? "" : params.search;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `user?page=${page}&limit=8&search=${search}&sort=firstName ASC`,
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
  const [totalPage, setTotalPage] = useState([]);
  const [search, setSearch] = useState("");

  const [data, setData] = useState(props.data);
  const defaultImg = process.env.URL_DEFAULT_IMG;

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
  // console.log(totalPage);

  useEffect(() => {
    // pemanggilan reducer untuk menyimpan data user ke redux
    dispatch({ type: "SET_ALL_DATA_USER", data: props.data });
    setData(props.data);
    setTotalPage(props.totalPage);
  }, [props.data]);

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
                  src={
                    item.image ? process.env.URL_IMAGE + item.image : defaultImg
                  }
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

          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => {
              console.log(e.selected + 1);
              router.push(`/transfer?page=${e.selected + 1}`);
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
    </>
  );
}

Transfer.getLayout = function getLayout(page) {
  return <Layout title={"Transfer - Zwallet"}>{page}</Layout>;
};
