import "./FilmDetails.scss";

export default function FilmDetails({ film, alt }) {
  let bioClass = `details__bio details__bio--${alt}`;
  if (film.bio.length < 100) {
    bioClass = `details__bio details__bio--extra-short details__bio--${alt} details__bio--extra-short--${alt}`;
  }
  if (film.bio.length < 150 && film.bio.length > 100) {
    bioClass = `details__bio details__bio--short details__bio--${alt} details__bio--short--${alt}`;
  }
  if (film.bio.length > 200) {
    bioClass = `details__bio details__bio--long details__bio--${alt} details__bio--long--${alt}`;
  }
  if (film.bio.length > 250) {
    bioClass = `details__bio details__bio--extra-long details__bio--${alt} details__bio--extra-long--${alt}`;
  }
  return (
    <section className={`details details--${alt}`}>
      {film.role || film.length || film.production || film.streamingLogo ? (
        <ul className="details__top">
          <li className="details__role">{film.role}</li>
          <li className="details__length">{film.length}</li>

          {film.production || film.streamingLogo ? (
            <li className="details__wrapper">
              {/* {film.production ? (
              <span className="details__production">{film.production}</span>
            ) : (
              ""
            )} */}
              {film.streamingLogo ? (
                <>
                  {/* {film.production ? (
                  <span className="details__span"> for</span>
                ) : (
                  ""
                )} */}
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
                </>
              ) : (
                ""
              )}
            </li>
          ) : (
            ""
          )}
        </ul>
      ) : (
        ""
      )}
      <p className={bioClass}>{film.bio}</p>
    </section>
  );
}
