import { memo, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Card.module.scss";
import buildClassName from "../../utils/buildClassName";
import Button, { ButtonNamespace } from "../ui/Button";
import { ReactComponent as ArrowRight } from "../../static/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../static/icons/arrow-left.svg";
import { ReactComponent as RatingIcon } from "../../static/icons/rating.svg";
import { ReactComponent as DegreeOfRoastIcon } from "../../static/icons/degreeOfRoast.svg";
import CoffeeImage from "../../static/Discounts/Coffee.png";
import Choose = ButtonNamespace.Choose;
import Typography from "../ui/Typography";
import ArrayTSX from "../ui/ArrayTSX";
const Card = () => {
  const Cards = [
    {
      name: "Colombia Supremo",
      about: "Свежеобжаренный кофе - описание товара, вкус, аромат",
      price: 350,
      sourness: 10,
      discountPrice: 250,
      rating: 4,
      acid: 5,
      mustard: 5,
      reviews: 32,
      degreeOfRoast: 5,
      image: CoffeeImage,
    },
    {
      name: "Colombia Supremo Two Max",
      about:
        "Свежеобжаренный кофе - описание товара, вкус, аромат | Удвоенный мощь кофе",
      price: 750,
      discountPrice: 650,
      rating: 5,
      acid: 5,
      mustard: 5,
      reviews: 1600,
      degreeOfRoast: 5,
      image: CoffeeImage,
    },
    {
      name: "Colombia Supremo Two Max",
      about:
        "Свежеобжаренный кофе - описание товара, вкус, аромат | Удвоенный мощь кофе",
      price: 750,
      discountPrice: 650,
      rating: 5,
      acid: 5,
      mustard: 5,
      reviews: 1600,
      degreeOfRoast: 5,
      image: CoffeeImage,
    },
    {
      name: "Colombia Supremo",
      about: "Свежеобжаренный кофе - описание товара, вкус, аромат",
      price: 350,
      discountPrice: 250,
      rating: 4,
      acid: 5,
      mustard: 5,
      reviews: 32,
      degreeOfRoast: 5,
      image: CoffeeImage,
    },
    {
      name: "Colombia Supremo Two Max",
      about:
        "Свежеобжаренный кофе - описание товара, вкус, аромат | Удвоенный мощь кофе",
      price: 750,
      discountPrice: 650,
      rating: 5,
      acid: 5,
      mustard: 5,
      reviews: 1600,
      degreeOfRoast: 5,
      image: CoffeeImage,
    },
    {
      name: "Colombia Supremo Two Max",
      about:
        "Свежеобжаренный кофе - описание товара, вкус, аромат | Удвоенный мощь кофе",
      price: 750,
      discountPrice: 650,
      rating: 5,
      acid: 5,
      mustard: 5,
      reviews: 1600,
      degreeOfRoast: 5,
      image: CoffeeImage,
    },
  ];
  const [isDisabledLeft, setIsDisabledLeft] = useState<boolean>(true);
  const [isDisabledRight, setIsDisabledRight] = useState<boolean>(false);
  const [moveCard, setMoveCard] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const onMoreCard = useCallback(() => {
    if (ref.current) {
      setMoveCard((count) => count + ref.current!.clientWidth);
    }
  }, []);

  const removeMoreCard = useCallback(() => {
    if (ref.current) {
      setMoveCard((count) => count - ref.current!.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const width: number = ref.current!.clientWidth;
      if (moveCard === 0) {
        setIsDisabledLeft(true);
        setIsDisabledRight(false);
        if (Cards.length === 1) {
          setIsDisabledRight(true);
        }
      } else if (Cards.length * width - moveCard === width) {
        console.log("2");
        setIsDisabledLeft(false);
        setIsDisabledRight(true);
      } else if (Cards.length * width >= Cards.length * width - width) {
        console.log("3");
        setIsDisabledLeft(false);
        setIsDisabledRight(false);
      }
    }
  }, [moveCard]);

  return (
    <>
      <Button
        onClick={removeMoreCard}
        disabled={isDisabledLeft}
        type="button"
        size="circle"
        classes={buildClassName(
          styles["Card__arrow"],
          styles["Card__arrow--left"]
        )}
      >
        <ArrowLeft />
      </Button>

      <div className={styles["Card"]}>
        <div
          className={styles["Card__inner"]}
          style={{ transform: `translateX(-${moveCard}px)` }}
        >
          {Cards.map((obj, index) => (
            <div className={styles["Card__item"]} key={index} ref={ref}>
              <div className={styles["Card__block"]}>
                <div className={styles["Card__top"]}>
                  <div className={styles["Card__discount"]}>
                    <i className={styles["Card__discount-proc"]}>%</i>
                    <span className={styles["Card__discount-name"]}>
                      Скидки
                    </span>
                  </div>
                  <div className={styles["Card__choose"]}>
                    <Choose type="choose" variants={[250, 1000]} />
                  </div>
                </div>
                <div className={styles["Card__info"]}>
                  <div className={styles["Card__info-item"]}>
                    <img
                      className={styles["Card__info-image"]}
                      src={obj.image}
                      slot={obj.name}
                      alt={obj.name}
                    />
                  </div>
                  <div className={styles["Card__info-item"]}>
                    <div className={styles["Card__info-rating"]}>
                      {
                        <div
                          className={buildClassName(
                            styles["Card__info-rating-icon"],
                            obj.rating >= 1 &&
                              styles["Card__info-rating-active"]
                          )}
                        >
                          <RatingIcon />
                        </div>
                      }
                      {
                        <div
                          className={buildClassName(
                            styles["Card__info-rating-icon"],
                            obj.rating >= 2 &&
                              styles["Card__info-rating-active"]
                          )}
                        >
                          <RatingIcon />
                        </div>
                      }
                      {
                        <div
                          className={buildClassName(
                            styles["Card__info-rating-icon"],
                            obj.rating >= 3 &&
                              styles["Card__info-rating-active"]
                          )}
                        >
                          <RatingIcon />
                        </div>
                      }
                      {
                        <div
                          className={buildClassName(
                            styles["Card__info-rating-icon"],
                            obj.rating >= 4 &&
                              styles["Card__info-rating-active"]
                          )}
                        >
                          <RatingIcon />
                        </div>
                      }
                      {
                        <div
                          className={buildClassName(
                            styles["Card__info-rating-icon"],
                            obj.rating >= 5 &&
                              styles["Card__info-rating-active"]
                          )}
                        >
                          <RatingIcon />
                        </div>
                      }
                    </div>
                    <div className={styles["Card__info-rating-text"]}>
                      <Typography variant="h1" size={20}>
                        {obj.rating.toFixed(1)}
                      </Typography>
                      <Typography
                        variant="h3"
                        classes={styles["Card__info-rating-text-review"]}
                      >
                        ({obj.reviews} отзыва)
                      </Typography>
                    </div>
                    <div className={styles["Card__block-svg"]}>
                      <ArrayTSX length={obj.degreeOfRoast}>
                        <i
                          className={styles["Card-svg"]}
                          key={index}
                          tabIndex={1}
                        >
                          <DegreeOfRoastIcon />
                        </i>
                      </ArrayTSX>
                    </div>
                    <div className={styles["Card__info-sourness"]}>
                      <Typography variant="h3" size={15}>
                        Кислинка
                      </Typography>
                      <div
                        className={styles["Card__info-sourness-progressive"]}
                      >
                        <ArrayTSX length={10}>
                          <i
                            className={styles["Card__info-sourness-circle"]}
                            tabIndex={0}
                            key={index}
                          />
                        </ArrayTSX>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["Card__about-it"]}></div>
                <div className={styles["Card__bottom"]}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={onMoreCard}
        disabled={isDisabledRight}
        type="button"
        size="circle"
        classes={buildClassName(
          styles["Card__arrow"],
          styles["Card__arrow--right"]
        )}
      >
        <ArrowRight />
      </Button>
    </>
  );
};

export default memo(Card);
