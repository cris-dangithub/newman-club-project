import { FC } from "react";
import "./Divider.css";

interface IDivider {
  height?: number;
  classname?: string;
}

const Divider: FC<IDivider> = ({ height = 65, classname = "" }) => {
  const styleLine = {
    height,
  };
  return <div className={`c-divider ${classname}`} style={styleLine}></div>;
};

export default Divider;
