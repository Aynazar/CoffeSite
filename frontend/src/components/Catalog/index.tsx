import { memo, useCallback, useRef, useState } from "react";
import styles from "./Catalog.module.scss";
import BeansPNG from "../../static/Catalog/Bears.png";
import TeaPNG from "../../static/Catalog/tea.png";
import KissPNG from "../../static/Catalog/kisspng.png";
import ZdorovoePNG from "../../static/Catalog/zdorovoe_pitane.png";
import Button from "../ui/Button";

const Catalog = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const CatalogItems = [
    {
      name: "Свежеобжаренный кофе",
      image: BeansPNG,
      id: 1,
    },
    {
      name: "Чай и кофейные напитки",
      image: TeaPNG,
      id: 2,
    },
    {
      name: "Продукция для вендинга",
      image: KissPNG,
      id: 3,
    },
    {
      name: "Здоровое питание",
      image: ZdorovoePNG,
      id: 4,
    },
  ];

  return (
    <section className={styles["Catalog"]}>
      <span className={styles["Catalog__title"]} title="Title">
        Каталоги нашей продукции
      </span>

      <div className={styles["Catalog__items"]}>
        {CatalogItems.map((obj) => (
          <div
            tabIndex={obj.id}
            ref={ref}
            key={obj.id}
            className={styles["Catalog__item"]}
          >
            <div className={styles["Catalog__item-image-inner"]}>
              <img
                src={obj.image}
                alt={obj.name}
                className={styles["Catalog__item-image"]}
              />
            </div>
            <div className={styles["Catalog__item-title"]}>{obj.name}</div>
            <Button
              type="button"
              size="small"
              hidden={!isHover}
              classes={styles["Catalog__button"]}
            >
              Купить
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Catalog);
