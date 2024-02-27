import { ReviewObject } from "../../types/interfaces/interfaces";
import "./Reviews.scss";

interface ReviewsProps {
  reviews: Array<ReviewObject>;
  x: number;
  y: number;
  alt?: string;
}

export default function Reviews({ reviews, x, y, alt }: ReviewsProps) {
  const reviewsSorted = reviews.sort((a, b) => {
    return a.quote.length - b.quote.length;
  });
  const reviewsRating = (rating: number) => {
    let string = "";
    for (let i = 0; i < rating; i++) {
      string += `\u2B51 `;
    }
    return string;
  };

  const renderReviewsSliced = (x: number, y: number, alt?: string) => {
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
                    className={`review__image review__image--${alt} review__image--${review.author}`}
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

  const renderReviews = () => {
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
  };

  return <>{renderReviews()}</>;
}
