import { useState } from "react";
import "./Poster.scss";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Poster({ film, image }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="poster">
      {!show ? (
        <div className="poster__wrapper">
          <img src={image} alt={film.title} className="poster__image" />
          <div className="poster__overlay">
            {film.video ? (
              <div className="poster__button" onClick={handleShow}>
                <PlayIcon
                  className="poster__icon"
                  alt="Play video icon"
                  title="Play video"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : film.video ? (
        <div className="poster__wrapper">
          <div
            className="poster__button poster__button--alt"
            onClick={handleClose}
          >
            <XMarkIcon className="poster__icon poster__icon--alt" />
          </div>
          <iframe
            src={film.video}
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        <div className="poster__wrapper">
          <img src={image} alt={film.title} className="poster__image" />
        </div>
      )}
    </div>
  );
}
