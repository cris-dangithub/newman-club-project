import { FC, useEffect, CSSProperties } from "react";
import { IEvents } from "../../lib/interfaces/events.interface";
import "./CardEventDetails.css";
import getTimeFormated from "../../lib/utils/getTimeFormated";
import DateEvent from "./DateEvent";

interface ICardEventDetails {
  isShowedDetails: boolean;
  eventDetails?: IEvents;
  setIsShowedDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardEventDetails: FC<ICardEventDetails> = ({
  isShowedDetails,
  setIsShowedDetails,
  eventDetails,
}) => {
  function hideDetails() {
    setIsShowedDetails(false);
  }

  const { dateDDMY, timeHM } = getTimeFormated(eventDetails?.date);
  const styleDetails: CSSProperties = {
    transform: "translateX(0%)",
  };

  useEffect(() => {
    if (eventDetails) setIsShowedDetails(true);
  }, [eventDetails]);

  return (
    <div
      className="font-poppins flex c-CardEventDetails"
      style={isShowedDetails ? styleDetails : {}}
      onClick={hideDetails}
    >
      <section className="CardEventDetails__card-details">
        <article className="card-details__description-container">
          <h3 className="CardEvent__numEvent card-details__description-title">
            {eventDetails?.name}
          </h3>
          <section className="card-details__info-place-container">
            <span className="card-details__place-date">{dateDDMY}</span>
            <span className="card-details__place-time">{timeHM}</span>
            <span className="card-details__place">{eventDetails?.place}</span>
          </section>
          <section className="card-details__large-description">
            {eventDetails?.description}
          </section>
        </article>
        <div className="flex-col card-details__date-event-container">
          {eventDetails && (
            <DateEvent
              date={eventDetails?.date}
              addClassesCSS="card-details__date-event"
            />
          )}
        </div>
        <img className="card-details__image" src={eventDetails?.img} alt="" />
      </section>
    </div>
  );
};

export default CardEventDetails;
