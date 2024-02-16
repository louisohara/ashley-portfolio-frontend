import { Fragment } from "react";
import "./Description.scss";

export default function Description({
  film,
  part,
  firstPart,
  secondPart,
  alt,
}) {
  const renderDescriptionSliced = (text) => {
    return text.split("\n").map((paragraph, index) => (
      <Fragment key={index}>
        {paragraph}
        {index < text.split("\n").length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </Fragment>
    ));
  };

  const renderDescription = () => {
    if (film.description.length < 450) {
      return (
        <div className="carousel__slide">
          <div className="carousel__content carousel__content--description">
            <h3 className="description__title">DESCRIPTION</h3>
            <article className={`description description--${alt}`}>
              {renderDescriptionSliced(film.description)}
            </article>
          </div>
        </div>
      );
    } else {
      return (
        <div className="carousel__slide">
          <div className="carousel__content carousel__content--description">
            <h3 className="description__title">DESCRIPTION</h3>
            <article
              className={
                part === secondPart
                  ? `description description--${alt} description--long description--second description--second--${alt} description--long--${alt}`
                  : `description description--${alt} description--long description--long--${alt}`
              }
            >
              {renderDescriptionSliced(part)}
              <br />
              {part === firstPart ? "..." : ""}
            </article>
          </div>
        </div>
      );
    }
  };
  return <>{renderDescription()}</>;
}
