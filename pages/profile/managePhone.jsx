import React, { useState } from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";
import { useDispatch, useSelector } from "react-redux";

export default function ManagePhone() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState(user.data);

  return (
    <>
      <div className="col border p-5 main-content" style={{ height: "600px" }}>
        <div className="row m-0">
          <label className="transfer-label p-0">Manage Phone Number</label>
        </div>
        <div className="row m-0 mt-4">
          <p className="p-0 personalInfo-text">
            You can only delete the phone number and then you must add another
            phone number.
          </p>

          <List
            data={{
              title: "Primary",
              content: "+62 813 9387 7946",
              others: "Trash",
            }}
          />
        </div>
      </div>
    </>
  );
}

ManagePhone.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
