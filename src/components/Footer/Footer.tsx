import "./Footer.scss";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import vimeo from "../../assets/icons/vimeo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              href="https://twitter.com/AshFranRoy"
              className="footer__link"
              title="Twitter"
            >
              <img src={twitter} alt="Twitter icon" className="footer__icon" />
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://www.instagram.com/ashfranroy/"
              className="footer__link"
              title="Instagram"
            >
              <img
                src={instagram}
                alt="Instagram icon"
                className="footer__icon"
              />
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://vimeo.com/ashfranroy"
              className="footer__link"
              title="Vimeo"
            >
              <img src={vimeo} alt="Vimeo icon" className="footer__icon" />
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="http://www.linkedin.com/in/ashfranroy"
              className="footer__link"
              title="LinkedIn"
            >
              <img
                src={linkedin}
                alt="LinkedIn icon"
                className="footer__icon"
              />
            </a>
          </li>
        </ul>
        <p className="footer__branding">© 2024 ASHLEY FRANCIS-ROY</p>
      </div>
    </footer>
  );
}
