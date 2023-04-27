import { useRef } from "react";
import "./Header.css";
import JoinUsBtn from "./JoinUsBtn";
import Divider from "../divider/Divider";
import IconHeaderDesktop from "./IconHeaderDesktop";

const Header = () => {
  function handleClick() {
    const video = videoRef.current;
    if (video?.paused) {
      video.play();
      return;
    }
    video?.pause();
  }

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <header className="c-Header ">
      <video
        className="header__video header__video--mobile"
        autoPlay
        muted
        loop
        ref={videoRef}
        onClick={handleClick}
        playsInline
      >
        <source src="video/Final.mp4" />
      </video>
      <video
        className="header__video header__video--desktop"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="video/Final2.mp4" />
      </video>
      <JoinUsBtn />
      <IconHeaderDesktop />
      <Divider classname="header__divider" />
    </header>
  );
};

export default Header;
