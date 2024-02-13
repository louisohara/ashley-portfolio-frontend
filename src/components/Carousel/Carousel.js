import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import { Fragment } from "react";

// DO CURSOR FLASHLIGHT VISUAL EFFECT TO REVEAL THIS SECTION ON THE PAGE
// LIKE A DIRECTOR'S FLASHLIGHT
export default function Carousel({
  nominations,
  film,
  collaborators,
  reviews,
}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // autoplay: true,
    // controls slide scroll duration
    speed: 2000,
    // controls slide stay duration
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    swipeToSlide: true,
  };

  const reviewsSorted = reviews.sort((a, b) => {
    return a.quote.length - b.quote.length;
  });
  const reviewsRating = (rating) => {
    let string = "";
    for (let i = 0; i < rating; i++) {
      string += `\u2B51 `;
    }
    return string;
  };

  const renderReviewsSliced = (x, y, alt) => {
    if (reviews.length > 0) {
      return reviewsSorted.slice(x, y).map((review) => {
        return (
          <div className={`review review--${alt}`} key={review.id}>
            <div className={`review__wrapper review__wrapper--${alt}`}>
              {review.rating ? (
                <div className={`review__rating review__rating--${alt}`}>
                  {reviewsRating(review.rating)}
                </div>
              ) : (
                ""
              )}
              <div className={`review__text review__text--${alt}`}>
                <q className={`review__quotation review__quotation--${alt}`}>
                  <span className={`review__quote review__quote--${alt}`}>
                    {review.quote}
                  </span>
                </q>

                {!review.logo ? (
                  <h2 className={`review__author review__author--${alt}`}>
                    - {review.author}
                  </h2>
                ) : (
                  ""
                )}
              </div>
              {review.logo ? (
                <div
                  className={`review__image-container review__image-container--${alt}`}
                >
                  <img
                    src={review.logo}
                    alt={review.author}
                    className={`review__image review__image--${alt}`}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      });
    }
  };
  const renderReviews = (x, y, alt) => {
    if (reviews.length > 0) {
      return (
        <div className={`carousel__slide carousel__slide--${alt}`}>
          <article
            className={`carousel__content carousel__content--review carousel__content--review--${alt}`}
          >
            <h3 className="review__title">QUOTES</h3>
            {renderReviewsSliced(x, y, alt)}
          </article>
        </div>
      );
    }
  };

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

  // Split the description at the nearest paragraph break around the 450-character mark
  const splitIndex = film.description.lastIndexOf(".", 450);
  const firstPart = film.description.substring(0, splitIndex + 1);
  const secondPart = film.description.substring(splitIndex + 1);

  const renderDescription = (part) => {
    if (film.description.length < 450) {
      return (
        <div className="carousel__slide">
          <div className="carousel__content carousel__content--description">
            <h3 className="description__title">DESCRIPTION</h3>
            <article className="description">
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
                  ? "description description--long description--second"
                  : "description description--long"
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

  const renderCollaborators = () => {
    if (collaborators.length > 0) {
      return collaborators.map((collaborator) => {
        return (
          <div
            className={
              collaborators.length > 8
                ? "collaborator collaborator--long"
                : "collaborator"
            }
            key={collaborator.id}
          >
            <span className="collaborator__title">{collaborator.title}: </span>
            {collaborator.collaborator.split(",").map((word, index, array) => (
              <span key={index} className="collaborator__name">
                {word}
                {index < array.length - 1 && ","}
              </span>
            ))}
          </div>
        );
      });
    }
  };

  const renderNominations = () => {
    if (nominations.length > 0) {
      const n = Math.floor(nominations.length / 2);

      return nominations.slice(0, 6).map((nomination, i) => {
        return (
          <div
            className="nomination"
            key={nomination.id}
            style={
              n > 1
                ? {
                    width: `calc(calc(100%/${n}) - calc(10px * ${n - 1})  )`,
                  }
                : { width: "100%" }
            }
          >
            <div
              className={
                n > 1
                  ? "nomination__wrapper nomination__wrapper--alt"
                  : "nomination__wrapper"
              }
            >
              <div className="nomination__image-container">
                <img
                  src={nomination.logo}
                  alt={nomination.awardshow}
                  className="nomination__image"
                />
              </div>
              <div className="nomination__text">
                <div className="nomination__subtext">
                  <h3 className="nomination__category">
                    {nomination.category}
                  </h3>
                </div>
                <h2 className="nomination__result">{nomination.result}</h2>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {renderDescription(firstPart)}
        {secondPart ? renderDescription(secondPart) : ""}

        {renderReviews(0, 3, "first")}
        {reviews.length > 3
          ? renderReviews(3, reviews.length - 1, "second")
          : ""}
        {reviews.length > 3
          ? renderReviews(reviews.length - 1, reviews.length, "last")
          : ""}
        <div className="carousel__slide">
          <article className="carousel__content carousel__content--collaborators">
            <h3 className="collaborator__credits">CREDITS</h3>
            {renderCollaborators()}
          </article>
        </div>
        {nominations.length > 0 ? (
          <div className="carousel__slide">
            <article className="carousel__content carousel__content--nomination">
              <div className="carousel__nomination">{renderNominations()}</div>
              <h3 className="nomination__awards">AWARDS</h3>
            </article>
          </div>
        ) : (
          ""
        )}
      </Slider>
    </div>
  );
}
