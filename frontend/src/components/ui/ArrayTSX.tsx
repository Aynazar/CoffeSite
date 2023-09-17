import { FC, memo, ReactNode } from "react";

interface OwnProps {
  children?: ReactNode;
  length: number;
}

const ArrayTsx: FC<OwnProps> = ({ children, length }) => {
  return <>{new Array(length).fill(children)}</>;
};

export default memo(ArrayTsx);
