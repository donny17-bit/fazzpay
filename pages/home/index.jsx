import React from "react";
import Layout from "../../components/layout";

export default function Home() {
  return (
    <>
      <h1>haiii</h1>
    </>
  );
}

Home.getLayout = function getLayout(home) {
  return <Layout>{home}</Layout>;
};
