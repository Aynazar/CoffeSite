//@ts-nocheck
import {
  memo,
  FC,
  ReactNode,
  useCallback,
  MouseEvent,
  useState,
  useRef,
} from "react";
import styles from "./Button.module.scss";
import buildClassName from "../../utils/buildClassName";

interface OwnProps {
  type: "submit" | "reset" | "button" | "choose" | "string";
  children?: ReactNode;
  size?: "small" | "medium" | "large" | "circle" | string;
  hidden?: boolean;
  classes?: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface IButtonChoose {
  type: "choose" | "string";
  variants: string[] | number[];
  size?: "small" | "medium" | "large" | "circle" | string;
  hidden?: boolean;
  classes?: string;
  onClick?: () => void;
}

const Button: FC<OwnProps> = ({
  classes,
  onClick,
  size,
  hidden,
  type,
  children,
  disabled,
}) => {
  const [coordinate, setCoordinate] = useState<Object>({ posX: 0, posY: 0 });
  const [isRipple, setIsRipple] = useState<boolean>(false);

  const onTouchRipple = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }

    setIsRipple(true);

    const offset = event.target.getBoundingClientRect();

    setCoordinate({
      posX: event.clientX - offset.left,
      posY: event.clientY - offset.top,
    });

    setTimeout(() => {
      setIsRipple(false);
    }, 500);
  }, []);

  return (
    <button
      tabIndex={0}
      onClick={onTouchRipple}
      role="button"
      type={type}
      className={buildClassName(
        styles["Button"],
        size == "small" && styles["Button--sm"],
        size == "medium" && styles["Button--md"],
        size == "circle" && styles["Button-circle"],
        hidden && styles["Button-hidden"],
        classes && classes
      )}
      disabled={disabled}
    >
      {children}
      <span className={styles["Button-touch-ripple"]}>
        {isRipple && (
          <span
            className={styles["Button-ripple"]}
            style={{
              left: `${coordinate.posX}px`,
              top: `${coordinate.posY}px`,
            }}
          ></span>
        )}
      </span>
    </button>
  );
};

export default memo(Button);

export namespace ButtonNamespace {
  export const Choose: FC<IButtonChoose> = ({
    classes,
    onClick,
    size,
    hidden,
    type,
    variants,
  }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [choose, setChoose] = useState<number>(variants[0]);
    const ref = useRef<HTMLSpanElement>(null);
    const onClickButton = useCallback(() => {
      if (onClick) {
        onClick();
      }

      if (
        ref.current &&
        ref.current.classList.contains(styles["ButtonChoose-arrow--up"])
      ) {
        ref.current.classList.toggle(styles["ButtonChoose-arrow--down"]);
      } else {
        ref.current.classList.toggle(styles["ButtonChoose-arrow--up"]);
      }

      setIsActive((bool: boolean): boolean => !bool === true);
    }, []);

    const onSelectItem = useCallback((event: MouseEvent<HTMLSpanElement>) => {
      setChoose(event.target.ariaLabel);
    }, []);

    return (
      <>
        <button
          role="button"
          hidden={hidden}
          tabIndex={1}
          className={buildClassName(styles["ButtonChoose"], classes)}
          name={type}
          onClick={onClickButton}
        >
          <span className={styles["ButtonChoose-children"]}>{choose} г.</span>
          <span
            className={buildClassName(
              styles["ButtonChoose-arrow"],
              styles["ButtonChoose-arrow--down"]
            )}
            ref={ref}
          />
          <ul
            className={buildClassName(
              styles["ButtonChoose-block"],
              isActive && styles["ButtonChoose-block-active"]
            )}
          >
            {variants.map((obj, index) => (
              <li
                className={styles["ButtonChoose-block-item"]}
                key={index}
                tabIndex={index + 1}
                onClick={onSelectItem}
                aria-label={obj}
              >
                {`${obj} г.`}
              </li>
            ))}
          </ul>
        </button>
      </>
    );
  };
}
