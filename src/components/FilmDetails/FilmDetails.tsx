import "./FilmDetails.scss";
import { PropsObject } from "../../types/interfaces/interfaces";

interface detailsProps {
  film: PropsObject;
  alt?: string;
}

export default function FilmDetails({ film, alt }: detailsProps) {
  let bioClass = `details__bio--${
    film.bio.split(" ")[0]
  } details__bio details__bio--${alt}`;
  if (film.bio.length < 100) {
    bioClass = `details__bio--${
      film.bio.split(" ")[0]
    } details__bio details__bio--extra-short details__bio--${alt} details__bio--extra-short--${alt}`;
  }
  if (film.bio.length < 150 && film.bio.length > 100) {
    bioClass = `details__bio--${
      film.bio.split(" ")[0]
    } details__bio details__bio--short details__bio--${alt} details__bio--short--${alt}`;
  }
  if (film.bio.length > 200) {
    bioClass = `details__bio--${
      film.bio.split(" ")[0]
    } details__bio details__bio--long details__bio--${alt} details__bio--long--${alt}`;
  }
  if (film.bio.length > 250) {
    bioClass = `details__bio--${
      film.bio.split(" ")[0]
    } details__bio details__bio--extra-long details__bio--${alt} details__bio--extra-long--${alt}`;
  }
  return (
    <section className={`details details--${alt}`}>
      {("role" in film ||
        "length" in film ||
        "production" in film ||
        "streamingLogo" in film) && (
        <ul className="details__top">
          {"role" in film && film.role && (
            <li className="details__role">{film.role}</li>
          )}
          {"length" in film && film.length && (
            <li className="details__length">{film.length}</li>
          )}
          {("production" in film || "streamingLogo" in film) && (
            <li className="details__wrapper">
              {"streamingLogo" in film && film.streamingLogo && (
                <div className="details__image-container">
                  {film.link ? (
                    <a href={film.link} className="film__link">
                      <img
                        src={film.streamingLogo}
                        alt="production company"
                        className="details__image"
                      />
                    </a>
                  ) : (
                    <img
                      src={film.streamingLogo}
                      alt="production company"
                      className="details__image"
                    />
                  )}
                </div>
              )}
            </li>
          )}
        </ul>
      )}
      {"bio" in film && film.bio && <p className={bioClass}>{film.bio}</p>}
    </section>
  );
}
