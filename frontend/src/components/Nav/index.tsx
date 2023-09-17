import {FC, memo} from "react";
import styles from "./Nav.module.scss";
import { ReactComponent as BasketIcon } from "../../static/icons/icon-nav-1.svg";
import { ReactComponent as SearchIcon } from "../../static/icons/icon-nav-2.svg";
import { ReactComponent as UserIcon } from "../../static/icons/icon-nav-3.svg";
import IconButton from "../ui/IconButton";

interface OwnProps {
  onClick?: () => void
}

const Nav: FC<OwnProps> = ({onClick}) => {
  return (
    <nav>
      <ul className={styles["nav_list"]}>
        <li className={styles["nav_icon"]}>
          <IconButton onClick={onClick}>
            <SearchIcon />
          </IconButton>
        </li>
        <li className={styles["nav_icon"]}>
          <IconButton>
            <BasketIcon />
          </IconButton>
        </li>
        <li className={styles["nav_icon"]}>
          <IconButton>
            <UserIcon />
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Nav);
