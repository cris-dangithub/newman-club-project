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
import { memories } from "../lib/mocks/memories.mocks";
import LogoBlue from "../assets/svg/LogoBlue";
import { useForm } from "react-hook-form";
import { IForm } from "../lib/interfaces/form.interface";

const Home = () => {
  function Submit(data: IForm) {
    console.log(data);
  }
  const [maxEvents, setMaxEvents] = useState<number>();
  const [eventDetails, setEventDetails] = useState<IEvents>();
  const [isShowedDetails, setIsShowedDetails] = useState<boolean>(false);
  const { windowWidth } = useResizeWindow();

  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phoneNumber: "",
    },
  });

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
            <img className="the-crew__image" src="img/memories2.png" />
            <img
              className="the-crew__image the-crew__image--main"
              src="img/memories1.png"
            />
          </div>
        </section>
        <Divider height={130} />
      </article>
      {/* What's new */}
      <WhatNews />
      {/* Memories */}
      <article id="memories" className="flex-col memories">
        <TitleRudder title="Memories" />
        <div className="memories__container">
          {memories.map((memory, idx) => (
            <img
              key={idx}
              src={memory.url}
              alt=""
              className="memories__image"
            />
          ))}
        </div>
        <button className="font-segoe--bold orange-btn memories__btn">
          More memories
        </button>
      </article>
      {/* Newman Sountrack */}
      <section className="flex-col newman-soundtrack">
        <div className="flex-col newman-soundtrack__container">
          <img
            className="newman-soundtrack__spoty"
            src="img/spotify.jpg"
            alt=""
          />
          <div className="newman-soundtrack__man-container">
            <img
              className="newman-soundtrack__man"
              src="img/men-happy.png"
              alt=""
            />
            <div className="font-red-hat-display--bold flex-col newman-soundtrack__text-container">
              <span className="newman-soundtrack__text">Newman</span>
              <span className="newman-soundtrack__text newman-soundtrack__text--moved">
                Soundtrack
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Form */}
      <article className="joinus">
        <section className="joinus__container">
          <div className="joinus__img-container">
            <img className="joinus__img" src="img/joinus.png" alt="" />
            <div className="joinus__img-logo">
              <LogoBlue />
            </div>
          </div>
          <form
            id="form"
            className="flex-col form"
            onSubmit={handleSubmit(Submit)}
          >
            <h2 className="font-red-hat-display--regular the-crew__title">
              Join{" "}
              <span className="font-red-hat-display--bold the-crew__title--crew">
                us.
              </span>
            </h2>
            <p className="font-poppins joinus__form-text">
              In the sea of life, there is nothing to fear if you have God as
              your captain. Join our crew!
            </p>
            <input
              type="text"
              {...register("name")}
              placeholder="Full Name"
              className="joinus__input"
              required
            />
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className="joinus__input"
              required
            />
            <input
              type="number"
              {...register("phoneNumber")}
              placeholder="Cell Phone Number"
              className="joinus__input"
              required
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="joinus__input joinus__input--textarea"
              required
            />
            <button className="font-segoe--bold orange-btn joinus__btn">
              Join us
            </button>
          </form>
        </section>
      </article>
    </main>
  );
};

export default Home;
