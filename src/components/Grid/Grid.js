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
  return (
    <div className="grid">
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
            />
          ) : (
            ""
          )}
        </li>
        <li className={`grid__item grid__item--${alt3}`}>
          {film ? <Title text={film.title} /> : ""}
          {user ? <Title text={user.full_name} alt="user" /> : ""}
        </li>
        <li className={`grid__item grid__item--${alt4}`}>
          {film ? <FilmDetails film={film} alt="film" /> : ""}
          {user ? <FilmDetails film={user} alt="user" /> : ""}
        </li>
      </ul>
    </div>
  );
}
