import { useState } from "react";
import IconComment from "../../assets/svg/IconComment";
import IconHeart from "../../assets/svg/IconHeart";
import IconTwoPeople from "../../assets/svg/IconTwoPeople";
import "./JoinUsBtn.css";

const JoinUsBtn = () => {
  function handleClick() {
    IsClicked(true);
    setTimeout(() => {
      IsClicked(false);
    }, 2000);
  }
  const [isClicked, IsClicked] = useState<boolean>(false);

  return (
    <a className="flex c-join-us-btn" href="#form" onClick={handleClick}>
      <button
        className={`join-us-btn__heart ${
          isClicked ? "join-us-btn__heart--clicked" : ""
        }`}
      >
        <IconHeart isActive={isClicked} />
        <IconTwoPeople isActive={isClicked} />
      </button>

      <span className="font-segoe--bold join-us-btn__text">
        {isClicked ? "YAY!" : "JOIN US"}
      </span>

      <div className="join-us-btn__comment">
        <div className="join-us-btn__comment--circle">
          <IconComment />
          <div className="join-us-btn__comment--triangle"></div>
        </div>
      </div>
    </a>
  );
};

export default JoinUsBtn;
