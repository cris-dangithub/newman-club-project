import { FC, useRef, useState } from "react";
import "./CardEvent.css";
import { IEvents } from "../../lib/interfaces/events.interface";
import Divider from "../divider/Divider";
import DateEvent from "./DateEvent";

interface CardEvent {
  event: IEvents;
  setEventDetails: React.Dispatch<React.SetStateAction<IEvents | undefined>>;
  setIsShowedDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardEvent: FC<CardEvent> = ({
  event,
  setEventDetails,
  setIsShowedDetails,
}) => {
  function handleMouseOver() {
    setIsMouseIn(true);
    clearInterval(setTimeOutRef.current);
  }

  function handleMouseLeave() {
    const timeOutRef = setTimeout(() => setIsMouseIn(false), 200);
    setTimeOutRef.current = timeOutRef;
  }

  function showDetails() {
    setEventDetails(event);
    setIsShowedDetails(true);
  }

  const [isMouseIn, setIsMouseIn] = useState<boolean>();
  const setTimeOutRef = useRef<number>();

  return (
    <section
      className={`font-poppins flex-col c-CardEvent ${
        isMouseIn ? "" : "c-CardEvent--hidden"
      }`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={showDetails}
    >
      <img className="CardEvent__img-background" src={event.img} alt="" />
      <div className="overlay CardEvent__overlay-background"></div>
      <h3 className="CardEvent__numEvent">{event.name}</h3>
      <div className="flex-col CardEvent__date-event">
        <Divider classname="CardEvent__divider" />
        <DateEvent date={event.date} />
      </div>
    </section>
  );
};

export default CardEvent;
