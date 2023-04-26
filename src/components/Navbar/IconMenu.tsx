import React, { FC } from "react";
import "./IconMenu.css";

interface IIconMenu {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconMenu: FC<IIconMenu> = ({ isOpen, setIsOpen }) => {
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="c-IconMenu" onClick={handleClick}>
      <div className="flex IconMenu-container">
        <div className="IconMenu__short-line"></div>
        <div className="IconMenu__large-line"></div>
        <div className="IconMenu__short-line"></div>
      </div>
    </div>
  );
};

export default IconMenu;
