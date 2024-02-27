import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";
import { useEffect } from "react";

export default function Header({ closeMenu, menuClosed, films }) {
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

  const renderLinks = () => {
    if (films) {
      return films.map((film) => {
        return (
          <li className="header__item header__item--film" key={film.id}>
            <p className="header__p">
              <a
                href={`/films/${film.id}`}
                className={`header__link header__link--film header__link--${film.id}`}
              >
                {film.title}
              </a>
            </p>
          </li>
        );
      });
    }
  };

  function getFilmNumber() {
    const match = window.location.href.match(/\/films\/(\d+)/);

    if (match && match[1]) {
      return parseInt(match[1], 10);
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (films && /films/.test(window.location.href)) {
      const filmNumber = getFilmNumber();
      if (filmNumber) {
        const headerLinkEl = document.querySelector(
          `.header__link--${filmNumber}`
        );
        if (headerLinkEl) {
          headerLinkEl.classList.add("active");
        }
      }
      const filmLinkEl = document.querySelector(".header__link--alt");
      if (filmLinkEl) {
        filmLinkEl.classList.add("active");
      }
    }
  }, [films]);

  useEffect(() => {
    const menuLinks = document.getElementsByClassName("header__link");
    for (let i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].href === window.location.href) {
        menuLinks[i].className += " active";
      }
    }
    closeMenu();
  }, []);
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__navbar">
          <a href="/" className="header__left">
            <h1 className="header__logo">Ashley Francis-Roy</h1>
          </a>
          <ul className={menuClosed ? "header__menu " : "header__menu active"}>
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

              <ul className="header__secondary-menu ">
                <div className="header__inner">{renderLinks()}</div>
              </ul>
            </li>

            <li className="header__item">
              <a className="header__link header__link--contact" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <Hamburger menuClosed={menuClosed} />
        </nav>
      </div>
    </header>
  );
}
