import React, { useState } from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalInfo() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState(user.data);

  return (
    <>
      <div className="col border p-5 main-content">
        <div className="row m-0">
          <label className="transfer-label p-0">Personal Information</label>
        </div>
        <div className="row m-0 mt-4">
          <p className="p-0 personalInfo-text">
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </p>
          <List data={{ title: "First Name", content: data.firstName }} />
          <List data={{ title: "Last Name", content: data.lastName }} />
          <List data={{ title: "Verified E-mail", content: data.email }} />
          <List
            data={{
              title: "Phone Number",
              content: data.noTelp,
              others: "Link",
            }}
          />
        </div>
      </div>
    </>
  );
}

PersonalInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <SideMenu /> */}
      {page}
    </Layout>
  );
};
