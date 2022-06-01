import axiosServer from "../../utils/axiosServer";
import axiosClient from "../../utils/axios";
import React, { useEffect, useState } from "react";
import cookies from "next-cookies";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `user?page=${page}&limit=1&search=&sort=firstName ASC`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    console.log(result);
    return {
      props: {
        data: result.data.data,
        page: page,
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

export default function SSR(props) {
  const router = useRouter();
  console.log(props);
  const [data, setData] = useState(props.data);

  useEffect(() => {
    // pemanggilan reducer untuk menyimpan data user ke redux
    // dispatch({ type: "SET_ALL_DATA_USER", data: props.data })
    setData(props.data);
  }, props.data);

  return (
    <div>
      <h1>Rendering with SSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
          <hr />
        </div>
      ))}
      <button
        onClick={() => {
          router.push(`/rendering/ssr?page=2`);
        }}
      >
        To Page 2
      </button>
    </div>
  );
}
