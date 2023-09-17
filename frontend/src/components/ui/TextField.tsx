import React, {
  memo,
  FC,
  useState,
  ForwardedRef,
  useCallback,
  MouseEvent,
} from "react";
import styles from "./TextField.module.scss";
import { ReactComponent as SearchIcon } from "../../static/icons/search-poisk.svg";
import buildClassName from "../../utils/buildClassName";

interface OwnProps {
  type: "text" | "file" | "email" | "password";
  hidden?: boolean;
  placeholder?: string;
  onClose: () => void;
  onFocus?: () => void;
  onBeforeInput?: () => void;
  onBlur?: () => void;
  onChange?: (e: MouseEvent<HTMLInputElement>) => void;
  inputRef?: ForwardedRef<HTMLInputElement> | null;
  value?: string;
  isAutocomplete?: boolean;
}

const TextField: FC<OwnProps> = ({
  inputRef,
  onClose,
  type,
  hidden,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  onBeforeInput,
  value,
  isAutocomplete,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>("");

  const onFocusInput = useCallback(() => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  }, []);

  const onBlurInput = useCallback(() => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  }, []);

  const onValue = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    //@ts-ignore
    setValueInput(event.target.value);
  }, []);

  return (
    <label className={styles["TextField__label"]}>
      <input
        role={type}
        ref={inputRef}
        type={type}
        name={type}
        hidden={!hidden}
        className={buildClassName(
          styles["TextField"],
          isFocused && styles["TextField--focused"],
          isAutocomplete && styles["TextField--autocomplete"]
        )}
        aria-hidden={hidden}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onInput={onValue}
        onBeforeInput={onBeforeInput}
        value={valueInput}
      />
      <div className={styles["TextField__icon"]}>
        <SearchIcon className={styles["TextField_icon_search"]} />
      </div>
      <div className={styles["TextField__item"]}>
        <span
          className={buildClassName(
            styles["TextField__placeholder"],
            isFocused && styles["TextField__placeholder--hidden"],
            valueInput && styles["TextField__placeholder--hidden"]
          )}
        >
          {placeholder}
        </span>
      </div>
      <button
        role="button"
        type="button"
        className={styles["TextField__close-button"]}
        onClick={onClose}
      ></button>
    </label>
  );
};

export default memo(TextField);
