import "../styles/globals.scss";
import React, { useState } from "react";
import data from "../data-dummy/data.json";

function MyApp({ Component, pageProps }) {
  const [formList, setFormList] = useState(data);

  return <Component {...pageProps} />;
}

export default MyApp;
