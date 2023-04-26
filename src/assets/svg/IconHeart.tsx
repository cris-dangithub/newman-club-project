import { CSSProperties, FC } from "react";
import { IJoinUsIcons } from "../../lib/interfaces/icons.interface";

const IconHeart: FC<IJoinUsIcons> = ({ isActive }) => {
  const objStyle: CSSProperties = {
    opacity: 1,
    transform: "scale(1.0)",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="IconJoinUs IconJoinUs--heart"
      style={isActive ? objStyle : {}}
      viewBox="0 0 52.218 47.845"
    >
      <path
        id="favorite_FILL0_wght400_GRAD0_opsz48"
        d="M30.109,53.145,27.433,50.73A231.59,231.59,0,0,1,10.4,33.759Q4,26.514,4,19.073A13.491,13.491,0,0,1,17.707,5.3,14.849,14.849,0,0,1,24.3,6.9a15.5,15.5,0,0,1,5.809,5.254A18.933,18.933,0,0,1,36.049,6.9a13.791,13.791,0,0,1,6.462-1.6A13.491,13.491,0,0,1,56.218,19.073q0,7.441-6.4,14.686A231.59,231.59,0,0,1,32.785,50.73Zm0-24.543Zm0,19.386q9.922-9.138,16.057-15.861T52.3,19.073a9.492,9.492,0,0,0-9.791-9.856,10.461,10.461,0,0,0-6.136,2.023,14.745,14.745,0,0,0-4.7,5.809h-3.2A14.145,14.145,0,0,0,23.81,11.24a10.512,10.512,0,0,0-6.1-2.023,9.482,9.482,0,0,0-7.049,2.774,9.653,9.653,0,0,0-2.741,7.082q0,6.331,6.136,13.055T30.109,47.989Z"
        transform="translate(-4 -5.3)"
        fill="#205a8c"
      />
    </svg>
  );
};

export default IconHeart;
