import logo from "../../assets/logo192.png";
import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";

export default function Header() {
  const activateHeaderLink = (section) => {
    if (section !== "alt") {
      const activeLinkEl = document.querySelector(".header__link.active");
      if (activeLinkEl) {
        activeLinkEl.classList.remove("active");
      }
    }
    const filmLinkEl = document.querySelector(".header__link--alt.active");
    if (filmLinkEl) {
      filmLinkEl.classList.remove("active");
    }
    const headerEl = document.querySelector(`.header__link--${section}`);
    headerEl.classList.add("active");
  };

  const activateSection = (section) => {
    const activeEl = document.querySelector(".app__section.active");
    if (activeEl) {
      activeEl.classList.remove("active");
    }
    const sectionEl = document.querySelector(`.app__section--${section}`);
    sectionEl.classList.add("active");
  };

  //   const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    // setDropdownVisible(true);
    const secondaryMenu = document.querySelector(".header__secondary-menu");
    if (secondaryMenu) {
      secondaryMenu.classList.add("active");
    }
  };

  const handleMouseLeave = () => {
    // setDropdownVisible(false);
    const secondaryMenu = document.querySelector(".header__secondary-menu");
    if (secondaryMenu) {
      secondaryMenu.classList.remove("active");
    }
  };

  const closeMenu = (section) => {
    handleMouseLeave();
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__menu");
    if (section) {
      activateSection(section);
      activateHeaderLink(section);
    }
    hamburger.classList.remove("active");
    headerMenu.classList.remove("active");
  };
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__navbar">
          <a className="header__left" href="/">
            <img
              src={logo}
              alt="Ashley Francis Roy logo"
              className="header__logo"
            />
          </a>

          <ul className="header__menu">
            <li className="header__item">
              <p
                className="header__link header__link--about"
                onClick={() => {
                  closeMenu("about");
                }}
              >
                About
              </p>
            </li>

            <li
              className="header__item header__item--alt"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="header__link--alt">Films</p>

              <ul className="header__secondary-menu">
                <li className="header__item">
                  <p
                    className="header__link header__link--directing"
                    onClick={() => {
                      closeMenu("directing");
                      activateHeaderLink("alt");
                    }}
                  >
                    Directing
                  </p>
                </li>

                <li className="header__item">
                  <p
                    className="header__link header__link--producing"
                    onClick={() => {
                      closeMenu("producing");
                      activateHeaderLink("alt");
                    }}
                  >
                    Producing
                  </p>
                </li>
              </ul>
            </li>

            <li className="header__item">
              <p
                className="header__link header__link--contact"
                onClick={() => {
                  closeMenu("contact");
                }}
              >
                Contact
              </p>
            </li>
          </ul>
          <Hamburger />
        </nav>
      </div>
    </header>
  );
}
