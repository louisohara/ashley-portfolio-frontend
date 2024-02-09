import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

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
    speed: 1000,
    // controls slide stay duration
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    swipeToSlide: true,
  };
  console.log(nominations);
  const renderNominations = () => {
    if (nominations.length > 0) {
      return nominations.map((nomination) => {
        return (
          <div className="nomination" key={nomination.id}>
            <div className="nomination__wrapper">
              <div className="nomination__image-container">
                <img
                  src={nomination.logo}
                  alt={nomination.awardshow}
                  className="nomination__image"
                />
              </div>
              <div className="nomination__text">
                <h2 className="nomination__category">{nomination.category}</h2>
                <h3 className="nomination__result">{nomination.result}</h3>
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
        <div className="carousel__slide">
          <article className="carousel__content carousel__content--nomination">
            {renderNominations()}
          </article>
        </div>
        <div className="carousel__slide">
          <h3 className="carousel__content">2</h3>
        </div>
        <div className="carousel__slide">
          <h3 className="carousel__content">3</h3>
        </div>
        <div className="carousel__slide">
          <h3 className="carousel__content">4</h3>
        </div>
        <div className="carousel__slide">
          <h3 className="carousel__content">5</h3>
        </div>
      </Slider>
    </div>
  );
}
