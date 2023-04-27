import IconSmile from "../../assets/svg/IconSmile";
import IconThreePeople from "../../assets/svg/IconThreePeople";
import IconTwoPeople from "../../assets/svg/IconTwoPeople";
import "./CardRewards.css";

const CardRewards = () => {
  return (
    <ul className="flex-col c-CardRewards">
      <li className="flex-col CardRewards__item">
        <IconSmile />
        <span className="font-red-hat-display--bold CardRewards__number">
          165
        </span>
        <span className="font-red-hat-display--regular CardRewards__text">
          Happy freshman members
        </span>
      </li>
      <li className="CardRewards__divider"></li>
      <li className="flex-col CardRewards__item ">
        <IconTwoPeople className="CardRewards__item-icon-two-people" />
        <span className="font-red-hat-display--bold CardRewards__number">
          13
        </span>
        <span className="font-red-hat-display--regular CardRewards__text">
          Wise Senior members
        </span>
      </li>
      <li className="CardRewards__divider"></li>
      <li className="flex-col CardRewards__item">
        <IconThreePeople />
        <span className="font-red-hat-display--bold CardRewards__number">
          173
        </span>
        <span className="font-red-hat-display--regular CardRewards__text">
          The whole crew
        </span>
      </li>
    </ul>
  );
};

export default CardRewards;
