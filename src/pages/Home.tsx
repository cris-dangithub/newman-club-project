import Header from "../components/Header/Header";
import CardEvent from "../components/events/CardEvent";
import TitleRudder from "../components/titles/TitleRudder";
import useResizeWindow from "../lib/hooks/useResizeWindow";
import { events } from "../lib/mocks/evetns.mocks";
import { useState, useEffect } from "react";
import "./Home.css";
import CardEventDetails from "../components/events/CardEventDetails";
import { IEvents } from "../lib/interfaces/events.interface";
import Divider from "../components/divider/Divider";
import { theCrewTextOne } from "../lib/utils/texts";
import CardRewards from "../components/the-crew/CardRewards";
import WhatNews from "../components/news/WhatNews";

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
    <main className="c-Home">
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
          <div className="events__container-background">
            <div className="events__container-background--circle"></div>
            <div className="events__container-background--square"></div>
          </div>
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
        <Divider height={190} classname="events__divider" />
      </article>

      {/* The crew */}
      <article id="the-crew" className="the-crew">
        <section className="flex-col the-crew__card">
          <div className="the-crew-border-desktop"></div>
          <div className="font-poppins the-crew__description">
            <h2 className="font-red-hat-display--regular the-crew__title">
              The{" "}
              <span className="font-red-hat-display--bold the-crew__title--crew">
                crew.
              </span>
            </h2>
            <p className="the-crew__text">
              {theCrewTextOne} <br />
              <br /> {theCrewTextOne}{" "}
            </p>
            <button className="font-segoe--bold orange-btn the-crew__btn">
              Learn More
            </button>
          </div>
          <CardRewards />
          <div className="the-crew__image-container">
            <img className="the-crew__image" src="/img/memories2.png" />
            <img
              className="the-crew__image the-crew__image--main"
              src="/img/memories1.png"
            />
          </div>
        </section>
        <Divider height={130} />
      </article>
      {/* What's new */}
      <WhatNews />
    </main>
  );
};

export default Home;
