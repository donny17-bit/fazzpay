import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import BalanceCard from "../../components/balanceCard";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../stores/action/user";

export default function Home() {
  // const [dataUser, setDataUser] = useState({});
  const id = Cookies.get("id");
  const dispatch = useDispatch();

  const getDataUser = async () => {
    await dispatch(getUserId(id));
    // const result = await axios.get(`/user/profile/${id}`);
    // console.log(result);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <div className="col border p-0">
        {/* balance card */}
        <div className="row border">
          <div className="col border" style={{ height: "300px" }}></div>
          <div className="col border" style={{ height: "300px" }}></div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(home) {
  return (
    <Layout>
      <BalanceCard />
      {home}
    </Layout>
  );
};
