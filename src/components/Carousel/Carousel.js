import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Collaborators from "../Collaborators/Collaborators";
import Reviews from "../Reviews/Reviews";
import Description from "../Description/Description";
import Nominations from "../Nominations/Nominations";

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
    autoplay: true,
    // controls slide scroll duration
    speed: 2000,
    // controls slide stay duration
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    swipeToSlide: true,
  };

  // Split the description at the nearest paragraph break around the 450-character mark
  const splitIndex = film.description.lastIndexOf(".", 450);
  const firstPart = film.description.substring(0, splitIndex + 1);
  const secondPart = film.description.substring(splitIndex + 1);

  return (
    <div className="carousel">
      <Slider {...settings}>
        <Description
          firstPart={firstPart}
          secondPart={secondPart}
          film={film}
          part={firstPart}
        />
        {secondPart ? (
          <Description
            firstPart={firstPart}
            secondPart={secondPart}
            film={film}
            part={secondPart}
          />
        ) : (
          ""
        )}
        {reviews.length > 0 ? (
          <Reviews reviews={reviews} x={0} y={3} alt="first" />
        ) : (
          ""
        )}
        {reviews.length > 3 ? (
          <Reviews
            reviews={reviews}
            x={3}
            y={reviews.length - 1}
            alt="second"
          />
        ) : (
          ""
        )}
        {reviews.length > 3 ? (
          <Reviews
            reviews={reviews}
            x={reviews.length - 1}
            y={reviews.length}
            alt="last"
          />
        ) : (
          ""
        )}
        <Collaborators collaborators={collaborators} />
        {nominations.length > 0 ? (
          <Nominations nominations={nominations} />
        ) : (
          ""
        )}
      </Slider>
    </div>
  );
}
