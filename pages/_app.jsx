import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../client/state/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
