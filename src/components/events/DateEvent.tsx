import { FC } from "react";
import useResizeWindow from "../../lib/hooks/useResizeWindow";

interface IDateEvent {
  date: Date;
  addClassesCSS?: string;
}
const DateEvent: FC<IDateEvent> = ({ date, addClassesCSS = "" }) => {
  function getMonth() {
    if (windowWidth < 1024) return dateDM.split(" ")[0].substring(0, 3);
    return dateDM.split(" ")[0].substring(0, 4);
  }

  function getDay() {
    if (windowWidth < 1024) return dateDM.split(" ")[1].substring(0, 3);
    return dateDM.split(" ")[1].substring(0, 4);
  }

  const { windowWidth } = useResizeWindow();
  const dateDM = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <span className={`CardEvent__date CardEvent__date--day ${addClassesCSS}`}>
        {getDay()}
      </span>
      <span
        className={`CardEvent__date CardEvent__date--month ${addClassesCSS}`}
      >
        {getMonth()}
      </span>
    </>
  );
};

export default DateEvent;
