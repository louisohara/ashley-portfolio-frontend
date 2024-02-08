import logo from "../../assets/icons/logo192.png";
import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";
import { useEffect } from "react";

export default function Header({ closeMenu }) {
  const handleMouseEnter = () => {
    const arrow = document.querySelector(".header__arrow");
    const secondaryMenu = document.querySelector(".header__secondary-menu");
    if (secondaryMenu) {
      secondaryMenu.classList.add("active");
    }
    if (arrow) {
      arrow.classList.remove("hide-toggle");
    }
  };

  const handleMouseLeave = () => {
    const arrow = document.querySelector(".header__arrow");
    const secondaryMenu = document.querySelector(".header__secondary-menu");
    if (secondaryMenu) {
      secondaryMenu.classList.remove("active");
    }
    if (arrow) {
      arrow.classList.add("hide-toggle");
    }
  };

  useEffect(() => {
    const menuLinks = document.getElementsByClassName("header__link");
    for (let i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].href === window.location.href) {
        menuLinks[i].className += " active";
        if (
          /directing/.test(window.location.href) ||
          /producing/.test(window.location.href) ||
          /films/.test(window.location.href)
        ) {
          const filmLinkEl = document.querySelector(".header__link--alt");
          if (filmLinkEl) {
            filmLinkEl.classList.add("active");
          }
        }
      }
    }
    closeMenu();
  }, []);
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__navbar">
          <div className="header__left">
            <img
              src={logo}
              alt="Ashley Francis Roy logo"
              className="header__logo"
            />
          </div>

          <ul className="header__menu active">
            <li className="header__item">
              <a className="header__link header__link--about" href="/about">
                About
              </a>
            </li>

            <li
              className="header__item header__item--alt"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="
              header__link--alt"
              >
                Films
                <div className="header__arrow hide-toggle clearfix">
                  <div className="header__arrow-open-close"></div>
                </div>
              </div>

              <ul className="header__secondary-menu">
                <li className="header__item">
                  <p>
                    <a href="/films" className="header__link header__link--all">
                      All
                    </a>
                  </p>
                </li>
                <li className="header__item">
                  <p>
                    <a
                      href="/directing"
                      className="header__link header__link--directing"
                    >
                      Directing
                    </a>
                  </p>
                </li>

                <li className="header__item">
                  <p>
                    <a
                      href="/producing"
                      className="header__link header__link--producing"
                    >
                      Producing
                    </a>
                  </p>
                </li>
              </ul>
            </li>

            <li className="header__item">
              <a className="header__link header__link--contact" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <Hamburger />
        </nav>
      </div>
    </header>
  );
}
