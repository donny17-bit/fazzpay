import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/menu.css";
import "../styles/balance.css";
import "../styles/transfer.css";
import "../styles/inputAmount.css";
import "../styles/history.css";
import "../styles/profile.css";
import "../styles/status.css";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Provider } from "react-redux";
// import store from "../stores";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
  // return <Component {...pageProps} />;
}

export default MyApp;
