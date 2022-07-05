import { React } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import SideMenu from "../sideMenu";
import BalanceCard from "../balanceCard";
import { Provider } from "react-redux";
import store from "../../stores";
import Head from "next/head";

export default function Layout(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <div>
        <Provider store={store}>
          <Navbar />
          <div className="container pt-5 pb-5">
            <div className="row">
              {/* left side */}
              <SideMenu />
              <div className="col p-0">
                {/* <BalanceCard /> */}
                <main>{props.children}</main>
              </div>
            </div>
          </div>
          <Footer />
        </Provider>
      </div>
    </>
  );
}
