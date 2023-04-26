import { FC } from "react";
import { ISocialIcons } from "../../lib/interfaces/icons.interface";

const IconFacebook: FC<ISocialIcons> = ({
  backgroundColor = "#fafafa",
  iconColor = "#245086",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      viewBox="0 0 49.599 51.961"
    >
      <g
        id="Grupo_973"
        data-name="Grupo 973"
        transform="translate(-945.545 -7302.514)"
      >
        <rect
          id="Rectángulo_77"
          data-name="Rectángulo 77"
          width="49.599"
          height="51.961"
          rx="24.799"
          transform="translate(945.545 7302.514)"
          fill={backgroundColor}
        />
        <text
          id="_"
          data-name=""
          transform="translate(957.236 7313.504)"
          fill={iconColor}
          fontSize="23"
          fontFamily="FontAwesome5Brands-Regular, 'Font Awesome \35  Brands'"
        >
          <tspan x="0" y="26">
            
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default IconFacebook;
