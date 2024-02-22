import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import FilmDetails from "../FilmDetails/FilmDetails";
import Poster from "../Poster/Poster";
import Title from "../Title/Title";
import "./Grid.scss";

export default function Grid({
  alt1,
  alt2,
  alt3,
  alt4,
  nominations,
  film,
  reviews,
  collaborators,
  user,
  clients,
  images,
}) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={film ? "grid grid--film" : "grid grid--user"}>
      <ul className={`grid__list grid__list--${alt1}`}>
        <li className={`grid__item grid__item--${alt1}`}>
          {film ? <Poster film={film} /> : ""}
          {user ? <Poster film={user} /> : ""}
        </li>
        <li className={`grid__item grid__item--${alt2}`}>
          {film ? (
            <Carousel
              nominations={nominations}
              film={film}
              collaborators={collaborators}
              reviews={reviews}
              limit="450"
              slides={dimensions.width <= 1024 ? "1" : "2"}
              alt="film"
            />
          ) : (
            ""
          )}
          {user ? (
            <Carousel
              film={user}
              alt="user"
              nominations={clients}
              limit="600"
              images={images}
              slides="1"
            />
          ) : (
            ""
          )}
        </li>
        <li className={`grid__item grid__item--${alt3}`}>
          {film ? <Title text={film.title} alt="film" /> : ""}
          {user ? <Title text="Ashley Francis-Roy" alt="user" /> : ""}
        </li>
        <li className={`grid__item grid__item--${alt4}`}>
          {film ? <FilmDetails film={film} alt="film" /> : ""}
          {user ? <FilmDetails film={user} alt="user" /> : ""}
        </li>
      </ul>
      {film ? (
        <div className="grid__undercolour grid__undercolour--film"></div>
      ) : (
        <div className="grid__undercolour grid__undercolour--user"></div>
      )}
      {film ? (
        <div className="grid__undercolour--two"></div>
      ) : (
        <div className="grid__undercolour--two grid__undercolour--two--user"></div>
      )}
    </div>
  );
}
