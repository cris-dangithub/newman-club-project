import { useState } from "react";
import LogoWhite from "../assets/svg/LogoWhite";
import IconMenu from "../components/Navbar/IconMenu";
import "./styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex c-navbar">
      <div className="flex navbar-container">
        <LogoWhite />

        <IconMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <section
          className={`font-red-hat-display--bold navbar__content ${
            isOpen ? "" : "navbar__content--hidden"
          }`}
        >
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#home" className="navbar__link">
                HOME
              </a>
            </li>
            <li className="navbar__item">
              <a href="#the-crew" className="navbar__link">
                THE CREW
              </a>
            </li>
            <li className="navbar__item">
              <a href="#events" className="navbar__link">
                EVENTS
              </a>
            </li>
            <li className="navbar__item">
              <a href="#whats-new" className="navbar__link">
                WHAT'S NEW
              </a>
            </li>
            <li className="navbar__item">
              <a href="#virtual-office" className="navbar__link">
                VIRTUAL OFFICE
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact" className="navbar__link">
                CONTACT
              </a>
            </li>
          </ul>
          <section className="flex-col navbar__contact">
            <span className="font-arimo--bold navbar__name">
              MARIA REINA PARISH
            </span>
            <ul className="navbar__social-list">
              <li>
                <a
                  href="#INSTA"
                  target="_blank"
                  className="navbar__social-circle"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>{" "}
              </li>
              <li>
                <a
                  href="#FACEBOOK"
                  target="_blank"
                  className="navbar__social-circle"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>{" "}
              </li>
            </ul>
          </section>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
