import { memo } from "react";
import styles from "./Discounts.module.scss";
import Typography from "../ui/Typography";
import Card from "../Card";

const Discounts = () => {
  return (
    <section className={styles["Discounts"]}>
      <div className={styles["Discounts__top"]}>
        <Typography variant="h1" size={50}>
          Товары со скидкой
        </Typography>
        <Typography variant="h3" size={20} classes={styles["Discounts__about"]}>
          Наша компания предлагает покупать товар со скидкой не только в дни
          распродаж или в течение действия ограниченных предложений, но и
          пользоваться скидками постоянно!
        </Typography>
      </div>
      <div className={styles["Discounts__bottom"]}>
        <Card />
      </div>
    </section>
  );
};

export default memo(Discounts);
