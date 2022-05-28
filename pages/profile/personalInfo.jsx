import React from "react";
import Layout from "../../components/layout";
// import SideMenu from "../../components/sideMenu";
import Link from "next/link";
import List from "../../components/list/list";

export default function PersonalInfo() {
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
          <List data={{ title: "First Name", content: "Robert" }} />
          <List data={{ title: "Last Name", content: "Chandler" }} />
          <List
            data={{ title: "Verified E-mail", content: "pewdiepie1@gmail.com" }}
          />
          <List
            data={{
              title: "Phone Number",
              content: "+62 813-9387-7946",
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
