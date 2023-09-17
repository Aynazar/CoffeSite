import { memo, FC, ReactNode } from "react";
import styles from "./IconButton.module.scss";

interface OwnProps {
  children: ReactNode;
  onClick?: () => void;
}

const IconButton: FC<OwnProps> = ({ children, onClick }) => {
  return (
    <button
      role="button"
      onClick={onClick}
      className={styles["IconButton"]}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default memo(IconButton);
