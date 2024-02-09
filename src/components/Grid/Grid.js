import Carousel from "../Carousel/Carousel";
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
}) {
  return (
    <div className="grid">
      <ul className={`grid__list grid__list--${alt1}`}>
        <li className={`grid__item grid__item--${alt1}`}>1</li>
        <li className={`grid__item grid__item--${alt2}`}>
          <Carousel
            nominations={nominations}
            film={film}
            collaborators={collaborators}
            reviews={reviews}
          />
        </li>
        <li className={`grid__item grid__item--${alt3}`}>3</li>
        <li className={`grid__item grid__item--${alt4}`}>4</li>
      </ul>
    </div>
  );
}
