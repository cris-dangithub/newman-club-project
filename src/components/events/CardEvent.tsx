import { FC, useRef, useState } from "react";
import "./CardEvent.css";
import { IEvents } from "../../lib/interfaces/events.interface";
import useResizeWindow from "../../lib/hooks/useResizeWindow";
import Divider from "../divider/Divider";

interface CardEvent {
  event: IEvents;
  numEvent: number;
}
const CardEvent: FC<CardEvent> = ({ event, numEvent }) => {
  function getMonth() {
    if (windowWidth < 1024) return date.split(" ")[0].substring(0, 3);
    return date.split(" ")[0].substring(0, 4);
  }

  function getDay() {
    if (windowWidth < 1024) return date.split(" ")[1].substring(0, 3);
    return date.split(" ")[1].substring(0, 4);
  }

  function handleMouseOver() {
    setIsMouseIn(true);
    clearInterval(setTimeOutRef.current);
  }

  function handleMouseLeave() {
    const timeOutRef = setTimeout(() => setIsMouseIn(false), 200);
    setTimeOutRef.current = timeOutRef;
  }

  const [isMouseIn, setIsMouseIn] = useState<boolean>();
  const setTimeOutRef = useRef<number>();
  const { windowWidth } = useResizeWindow();
  const date = event.date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <section
      className={`font-poppins flex-col c-CardEvent ${
        isMouseIn ? "" : "c-CardEvent--hidden"
      }`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img className="CardEvent__img-background" src={event.img} alt="" />
      <div className="overlay CardEvent__overlay-background"></div>
      <h3 className="CardEvent__numEvent">Event {numEvent}</h3>
      <div className="flex-col CardEvent__date-event">
        <Divider classname="CardEvent__divider" />
        <span className="CardEvent__date CardEvent__date--day">{getDay()}</span>
        <span className="CardEvent__date CardEvent__date--month">
          {getMonth()}
        </span>
      </div>
    </section>
  );
};

export default CardEvent;
