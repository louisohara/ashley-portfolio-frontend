import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import FilmDetails from "../FilmDetails/FilmDetails";
import Poster from "../Poster/Poster";
import Title from "../Title/Title";
import "./Grid.scss";
import Instagram from "../Instagram/Instagram";
import Nominations from "../Nominations/Nominations";
import Description from "../Description/Description";
import {
  ClientObject,
  CollaboratorsObject,
  ImageObject,
  NominationsObject,
  ReviewObject,
  filmObject,
  userObject,
} from "../../types/interfaces/interfaces";

interface GridProps {
  alt1?: string;
  alt2?: string;
  alt3?: string;
  alt4?: string;
  nominations?: NominationsObject[];
  film?: filmObject;
  reviews?: ReviewObject[];
  collaborators?: CollaboratorsObject[];
  user?: userObject;
  clients?: ClientObject[];
  images?: ImageObject[] | null;
}

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
}: GridProps) {
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
          {film ? <Poster film={film} image={film.image} /> : ""}
          {user ? (
            dimensions.width > 1024 && images ? (
              <Instagram alt="user" images={images[3]} />
            ) : (
              <Poster film={user} image={user.image2} />
            )
          ) : (
            ""
          )}
        </li>
        <li className={`grid__item grid__item--${alt2}`}>
          {film ? (
            dimensions.width > 1024 ? (
              <>
                {film.description && (
                  <div className="grid__description grid__description--alt">
                    <Description
                      film={film}
                      part={film.description}
                      alt="film"
                      title="DESCRIPTION"
                    />
                  </div>
                )}
                <Carousel
                  nominations={nominations}
                  collaborators={collaborators}
                  reviews={reviews}
                  limit="450"
                  slides={dimensions.width <= 1024 ? "1" : "1"}
                  alt="film"
                />
              </>
            ) : (
              <Carousel
                nominations={nominations}
                film={film}
                collaborators={collaborators}
                reviews={reviews}
                limit="450"
                slides={dimensions.width <= 1024 ? "1" : "1"}
                alt="film"
              />
            )
          ) : (
            ""
          )}
          {user ? (
            dimensions.width > 1024 && images ? (
              <Instagram alt="user" images={images[2]} />
            ) : (
              <Carousel
                film={user}
                alt="user"
                nominations={clients}
                limit="600"
                images={images}
                slides="1"
              />
            )
          ) : (
            ""
          )}
        </li>
        <li className={`grid__item grid__item--${alt3}`}>
          {film ? <Title text={film.title} alt="film" /> : ""}
          {user ? (
            dimensions.width > 1024 && images ? (
              // <Instagram images={images} alt="user" />
              <Instagram alt="user" images={images[0]} />
            ) : (
              <Title text="Director" alt="user" />
            )
          ) : (
            ""
          )}
        </li>
        <li className={`grid__item grid__item--${alt4}`}>
          {film ? <FilmDetails film={film} alt="film" /> : ""}
          {user ? (
            dimensions.width > 1024 && images ? (
              // <Nominations nominations={clients} alt="user" />
              <Instagram alt="user" images={images[1]} />
            ) : (
              <FilmDetails film={user} alt="user" />
            )
          ) : (
            ""
          )}
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
