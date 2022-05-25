import axios from "axios";
import React, { useState, useEffect } from "react";

export async function getServerSideProps(context) {
  console.log("RENDER WITH SERVER IS RUNNING");
  const result = await axios
    .get(`${process.env.URL_BACKEND2}/users`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return [];
    });
  return {
    props: {
      data: result.data,
    },
  };
}

export default function SSR(props) {
  const [data, setData] = useState([props.data]);

  return (
    <div>
      <h1>Rendering with SSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}
