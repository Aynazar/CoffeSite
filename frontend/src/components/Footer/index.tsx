import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as LogoIcon } from "../../static/logo/logo.svg";

const Footer = () => {
  return (
    <div className={styles["Footer"]}>
      <div className={styles["Footer_item"]}>
        <div className={styles["Logo"]}>
          <LogoIcon />
        </div>
      </div>
      <div className={styles["Footer_item"]}>
        <ul className={styles["Footer_nav"]}>
          <li className={styles["Footer_nav_link"]}>Каталог товаров</li>
          <li className={styles["Footer_nav_link"]}>Блог</li>
          <li className={styles["Footer_nav_link"]}>Контакты</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Footer);
