import Header from "../components/Header/Header";
import CardEvent from "../components/events/CardEvent";
import TitleRudder from "../components/titles/TitleRudder";
import useResizeWindow from "../lib/hooks/useResizeWindow";
import { events } from "../lib/mocks/evetns.mocks";
import { useState, useEffect } from "react";
import "./Home.css";
import CardEventDetails from "../components/events/CardEventDetails";
import { IEvents } from "../lib/interfaces/events.interface";

const Home = () => {
  const [maxEvents, setMaxEvents] = useState<number>();
  const [eventDetails, setEventDetails] = useState<IEvents>();
  const [isShowedDetails, setIsShowedDetails] = useState<boolean>(false);
  const { windowWidth } = useResizeWindow();

  useEffect(() => {
    if (windowWidth < 1280) return setMaxEvents(3);
    setMaxEvents(4);
  }, [windowWidth]);

  return (
    <main>
      <Header />

      {/* EVENTS */}
      <article id="events" className="events">
        <TitleRudder title="Events" />
        <div className="events__container">
          {events
            .map((event) => (
              <CardEvent
                key={event.id}
                event={event}
                setEventDetails={setEventDetails}
                setIsShowedDetails={setIsShowedDetails}
              />
            ))
            .slice(0, maxEvents)}
        </div>
        <p className="font-poppins events__phrase">
          Let's have fun, join us in our events. Find out more here
        </p>
        <button className="font-segoe--bold orange-btn events__btn">
          More events
        </button>
        <CardEventDetails
          eventDetails={eventDetails}
          isShowedDetails={isShowedDetails}
          setIsShowedDetails={setIsShowedDetails}
        />
      </article>
    </main>
  );
};

export default Home;
