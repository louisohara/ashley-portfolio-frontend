import "./Footer.scss";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import vimeo from "../../assets/icons/vimeo.svg";
import resume from "../../assets/icons/resume.svg";
import CV from "../../assets/files/resume.pdf";
import { useState, useEffect } from "react";
import axios from "axios";

// import logo from "../../assets/logo192.png";

export default function Footer() {
  // const [file, setFile] = useState(null);

  // const getResume = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8080/files/resume.pdf"
  //       // {
  //       //   responseType: "blob",
  //       // }
  //     );
  //     if (response) {
  //       // const file = new Blob([response.data], { type: "application/pdf" });

  //       setFile(response.data.blob());
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getResume();
  // }, []);

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
          {/* <li className="footer__list-item">
            <a
              href="https://www.thetalentmanager.com/talent/32103"
              className="footer__link"
              title="Talent Management"
            >
              <img
                src={representation}
                alt="Talent Management icon"
                className="footer__icon footer__icon--alt"
              />
            </a>
          </li> */}
          <li className="footer__list-item">
            <a href={CV} className="footer__link" title="Resume">
              <img src={resume} alt="Resume icon" className="footer__icon" />
            </a>
          </li>
        </ul>
        <p className="footer__branding">© 2024 ASHLEY FRANCIS-ROY</p>
      </div>
    </footer>
  );
}
