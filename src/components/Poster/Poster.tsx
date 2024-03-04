import { useState } from "react";
import "./Poster.scss";
import { PlayIcon } from "@heroicons/react/24/solid";
import { PropsObject } from "../../types/interfaces/interfaces";

interface PosterProps {
  film: PropsObject;
  image: string;
}

export default function Poster({ film, image }: PosterProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="poster">
      {!show ? (
        <div className="poster__wrapper">
          <img
            src={image}
            alt={
              "title" in film && film.title
                ? film.title
                : "Ashley Francis-Roy Profile"
            }
            className="poster__image"
          />
          <div className="poster__overlay">
            {"video" in film && film.video ? (
              <div className="poster__button" onClick={handleShow}>
                <PlayIcon className="poster__icon" title="Play video" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : "video" in film && film.video ? (
        <div className="poster__wrapper">
          <iframe
            title={film.title}
            src={`${film.video}&badge=0`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="poster__wrapper">
          <img
            src={image}
            alt={
              "title" in film && film.title
                ? film.title
                : "Ashley Francis-Roy Profile"
            }
            className="poster__image"
          />
        </div>
      )}
    </div>
  );
}
