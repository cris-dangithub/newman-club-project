import { CSSProperties, FC } from "react";
import { IJoinUsIcons } from "../../lib/interfaces/icons.interface";

const IconTwoPeople: FC<IJoinUsIcons> = ({ isActive }) => {
  const objStyle: CSSProperties = {
    opacity: 0,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="IconJoinUs IconJoinUs--two-people"
      style={isActive ? objStyle : {}}
      viewBox="0 0 54 37.935"
    >
      <path
        id="group_FILL0_wght400_GRAD0_opsz48"
        d="M1.9,46.884V41.142A7.115,7.115,0,0,1,3,37.263a6.692,6.692,0,0,1,3.054-2.6,48.431,48.431,0,0,1,8.033-2.81A31.517,31.517,0,0,1,21.448,31a31.132,31.132,0,0,1,7.33.855,48.844,48.844,0,0,1,8,2.81,6.876,6.876,0,0,1,3.085,2.6A6.973,6.973,0,0,1,41,41.142v5.742ZM37.574,30.819a60.58,60.58,0,0,1,7.941,1.436,27.991,27.991,0,0,1,6.048,2.169,9.455,9.455,0,0,1,3.176,2.871A6.7,6.7,0,0,1,55.9,41.142v5.742H44.66V41.142a9.887,9.887,0,0,0-1.955-6.322A14.308,14.308,0,0,0,37.574,30.819ZM21.448,27.276a8.788,8.788,0,0,1-9.163-9.163A8.788,8.788,0,0,1,21.448,8.95a8.788,8.788,0,0,1,9.163,9.163,8.788,8.788,0,0,1-9.163,9.163Zm21.991-9.163a8.788,8.788,0,0,1-9.163,9.163,13.66,13.66,0,0,1-1.5-.092,6.461,6.461,0,0,1-1.5-.336,10.025,10.025,0,0,0,2.23-3.757,15.3,15.3,0,0,0,.764-4.979,14.219,14.219,0,0,0-.764-4.856,12.987,12.987,0,0,0-2.23-3.879,12.891,12.891,0,0,1,1.5-.305,10.294,10.294,0,0,1,1.5-.122,8.788,8.788,0,0,1,9.163,9.163ZM5.565,43.219H37.33V41.142a3.493,3.493,0,0,0-.58-1.894,3.193,3.193,0,0,0-1.436-1.283,41.247,41.247,0,0,0-7.391-2.627,29.539,29.539,0,0,0-6.475-.672,29.957,29.957,0,0,0-6.506.672A40.883,40.883,0,0,0,7.52,37.966a3.03,3.03,0,0,0-1.4,1.283,3.633,3.633,0,0,0-.55,1.894ZM21.448,23.611a5.328,5.328,0,0,0,5.5-5.5,5.328,5.328,0,0,0-5.5-5.5,5.328,5.328,0,0,0-5.5,5.5,5.328,5.328,0,0,0,5.5,5.5Zm0-5.5Zm0,16.554Z"
        transform="translate(-1.9 -8.95)"
        fill="#235286"
      />
    </svg>
  );
};

export default IconTwoPeople;