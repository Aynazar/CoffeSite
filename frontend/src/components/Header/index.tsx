import { memo, useCallback, useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "../../static/logo/logo.svg";
import Nav from "../Nav";
import TextField from "../ui/TextField";
import buildClassName from "../../utils/buildClassName";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isClassName, setIsClassName] = useState<boolean>(false);
  const [inputWidth, setInputWidth] = useState<number>(81);
  const [isAutocomplete, setIsAutocomplete] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickNavigation = useCallback(() => {
    setOpen(true);

    setTimeout(() => {
      setIsClassName(true);
    }, 10);
  }, []);

  const onCloseNavigation = useCallback(() => {
    setIsClassName(false);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  }, []);

  const onBeforeInput = useCallback(() => {
    setIsAutocomplete(true);
  }, []);

  useEffect(() => {
    setInputWidth((window.innerWidth - 280 - 175) / 10);
    window.addEventListener("resize", () => {
      setInputWidth((window.innerWidth - 280 - 175) / 10);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", () => {
      if (inputRef.current) {
        if (inputRef.current.value === "") {
          setIsAutocomplete(false);
        }
      }
    });
  }, []);

  return (
    <header className={styles["Header"]}>
      {open && (
        <div
          className={buildClassName(
            styles["Header-input"],
            isClassName && styles["active"],
            `i-${inputWidth}rem`,
            isAutocomplete && styles["Header-input--autocomplete"]
          )}
          style={{ width: `${inputWidth}rem` }}
        >
          <TextField
            onClose={onCloseNavigation}
            type="text"
            hidden={open}
            placeholder="Поиск по товарам"
            inputRef={inputRef}
            onBeforeInput={onBeforeInput}
            isAutocomplete={isAutocomplete}
          />
          <div
            className={buildClassName(
              styles["Header__autocomplete"],
              isAutocomplete && styles["Header__autocomplete_active"]
            )}
          >
            <div className={styles["Header__autocomplete_wrap"]}>
              <ul className={styles["Header__autocomplete_list"]}>
                <li className={styles["Header__autocomplete_link"]}>
                  Ячменный напиток Millor - Здоровое питание
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className={styles["Header_item"]}>
        <div className={styles["Logo"]}>
          <LogoIcon />
        </div>
      </div>
      <div className={styles["Header_item"]}>
        <ul className={styles["Header_nav"]}>
          <li className={styles["Header_nav_link"]}>Каталог товаров</li>
          <li className={styles["Header_nav_link"]}>Блог</li>
          <li className={styles["Header_nav_link"]}>Контакты</li>
        </ul>
      </div>
      <div className={styles["Header_item"]}>
        <Nav onClick={onClickNavigation} />
      </div>
    </header>
  );
};

export default memo(Header);
