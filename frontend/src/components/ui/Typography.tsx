import { memo, ReactNode, FC } from "react";
import styles from "./Typography.module.scss";
import buildClassName from "../../utils/buildClassName";

interface OwnProps {
  children?: ReactNode;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | string;
  classes?: string;
  size?: number;
}

const Typography: FC<OwnProps> = ({ size, children, classes, variant }) => {
  return (
    <p
      className={buildClassName(
        styles["Typography"],
        styles[`Typography-variant-${variant}`],
        styles[`Typography-size-${size}`],
        classes && classes
      )}
    >
      {children}
    </p>
  );
};

export default memo(Typography);
