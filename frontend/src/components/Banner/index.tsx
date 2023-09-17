import { memo } from "react";
import styles from "./Banner.module.scss";
import Button from "../ui/Button";
import CoffeeBeans from "../../static/inner/coffee-beans.png";
import Coffee from "../../static/inner/coffee.png";
import buildClassName from "../../utils/buildClassName";
import img1 from "../../static/vector-1.jpg";
import img2 from "../../static/vector-2.jpg";
const Banner = () => {
  return (
    <>
      <div className={styles["Home"]}>
        <div className={styles["Home__content"]}>
          <div className={styles["Home__right"]}>
            <div className={styles["Home__context"]}>
              <span
                tabIndex={0}
                className={styles["Home__context-image"]}
                style={{ backgroundImage: `url(${Coffee})` }}
              />
              <span
                tabIndex={1}
                className={buildClassName(
                  styles["Home__context-image"],
                  styles["Home__context-image--coffee-beans"]
                )}
                style={{ backgroundImage: `url(${CoffeeBeans})` }}
              />
            </div>
          </div>
          <div className={styles["Home__left"]}>
            <div className={styles["Home__title"]}>Свежеобжаренный кофе</div>
            <div className={styles["Home__about"]}>
              <p style={{ marginBottom: "2.2rem" }}>
                Кофе Калининградской обжарки из разных стран произрастания с
                доставкой на дом.
              </p>
              <p style={{ marginBottom: "8.7rem" }}>
                Мы обжариваем кофе
                <span className={styles["Home__every"]}> каждые выходные</span>.
              </p>
            </div>
            <Button type="button" size="medium">
              Посмотреть каталог
            </Button>
          </div>
        </div>
        <div className={styles["Home_inner"]}>
          <span
            style={{
              backgroundImage: `url(${img1})`,
              left: "688.64px",
              top: "-310px",
            }}
            className={styles["Home_vector"]}
          ></span>
          <span
            style={{
              backgroundImage: `url(${img2})`,
              left: "-67rem",
              top: "47rem",
            }}
            className={buildClassName(
              styles["Home_vector"],
              styles["Home_vector--sm"]
            )}
          ></span>
        </div>
      </div>
    </>
  );
};

export default memo(Banner);
