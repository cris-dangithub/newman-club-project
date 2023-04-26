import IconHeart from "../../assets/svg/IconHeart";
import IconTwoPeople from "../../assets/svg/IconTwoPeople";
import "./JoinUsBtn.css";

const JoinUsBtn = () => {
  /*  const [isSend, setIsSend] = useState<>() */
  return (
    <div className="flex c-join-us-btn">
      <button className="join-us-btn__heart">
        <IconHeart />
        <IconTwoPeople />
      </button>
      <span className="font-segoe--bold join-us-btn__text">Join Us</span>
      <span
        className="font-arimo--bold join-us-btn__text"
        style={{ display: "none" }} //! ESTILO TERMPORAL
      >
        YAY!
      </span>
    </div>
  );
};

export default JoinUsBtn;
