import React from "react";
import styles from "./Home.module.scss";
import Banner from "../../Banner";
import Catalog from "../../Catalog";
import Discounts from "../../Discounts";

const Home = () => {
  return (
    <>
      <Banner />

      <Catalog />

      <Discounts />
    </>
  );
};

export default React.memo(Home);
