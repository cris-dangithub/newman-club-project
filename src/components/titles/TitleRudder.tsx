import { FC } from "react";
import IconRudder from "../../assets/svg/IconRudder";
import "./TitleRudder.css";

interface ITitleRudder {
  title: string;
}

const TitleRudder: FC<ITitleRudder> = ({ title }) => {
  return (
    <div className="flex-col c-TitleRudder">
      <IconRudder />
      <h2 className="font-poppins TitleRudder__text">{title}</h2>
    </div>
  );
};

export default TitleRudder;
