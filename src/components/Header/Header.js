import logo from "../../assets/logo192.png";
import { useState } from "react";
import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";

//  header menu is the drop down at mobile breakpoints
export default function Header() {
  const closeMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__menu");

    hamburger.classList.remove("active");
    headerMenu.classList.remove("active");
  };
  return (
    <header className="header">
      <nav className="header__navbar">
        <a href="/" className="header__left">
          <img
            src={logo}
            alt="Ashley Francis Roy logo"
            className="header__logo"
          />
        </a>

        <ul className="header__menu">
          <li className="header__item">
            <a href="/about" className="header__link" onClick={closeMenu}>
              About
            </a>
          </li>

          <li className="header__item">
            <p className="header__link header__link--alt">Films</p>
            <ul className="header__menu-hover">
              <li className="header__item">
                <a href="/directing" className="header__link">
                  Directing
                </a>
              </li>

              <li className="header__item">
                <a href="/producing" className="header__link">
                  Producing
                </a>
              </li>
            </ul>
          </li>

          <li className="header__item">
            <a href="/contact" className="header__link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <Hamburger />
      </nav>
    </header>
  );
}
