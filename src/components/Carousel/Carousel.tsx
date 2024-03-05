import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Collaborators from "../Collaborators/Collaborators";
import Reviews from "../Reviews/Reviews";
import Description from "../Description/Description";
import Nominations from "../Nominations/Nominations";
import Instagram from "../Instagram/Instagram";

import {
  ClientObject,
  CollaboratorsObject,
  ImageObject,
  NominationsObject,
  PropsObject,
  ReviewObject,
} from "../../types/interfaces/interfaces";

interface CarouselProps {
  nominations?: Array<NominationsObject> | Array<ClientObject>;
  film?: PropsObject;
  collaborators?: Array<CollaboratorsObject>;
  reviews?: Array<ReviewObject>;
  alt?: string;
  limit: string;
  images?: Array<ImageObject> | null;
  slides: string;
}

export default function Carousel({
  nominations,
  film,
  collaborators,
  reviews,
  alt,
  limit,
  images,
  slides,
}: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: parseInt(slides),
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    // controls slide scroll duration
    speed: 800,
    // controls slide stay duration
    autoplaySpeed: 10800,
    pauseOnHover: true,
    cssEase: "linear",
    swipeToSlide: true,
  };

  let firstPart: string = "";
  let secondPart: string = "";
  if (film && film.description) {
    const splitIndex: number = film.description.lastIndexOf(
      ".",
      parseInt(limit)
    );
    firstPart = film.description.substring(0, splitIndex + 1);
    secondPart = film.description.substring(splitIndex + 1);
  }
  function hasMultipleParams(...params: any[]) {
    let count = 0;
    params.forEach((param) => {
      if (param && param.length > 0) {
        count++;
      }
    });
    return count > 1;
  }
  const moreThanOne = hasMultipleParams(
    nominations,
    film && film.description,
    collaborators,
    reviews,
    images
  );

  return (
    <div className={`carousel carousel--${alt}`}>
      {moreThanOne ? (
        <Slider {...settings}>
          {film && film.description ? (
            <Description
              firstPart={firstPart}
              secondPart={secondPart}
              film={film}
              part={firstPart}
              alt={alt}
              title={"full_name" in film ? "ABOUT" : "DESCRIPTION"}
            />
          ) : (
            ""
          )}
          {film && film.description && secondPart ? (
            <Description
              firstPart={firstPart}
              secondPart={secondPart}
              film={film}
              part={secondPart}
              alt={alt}
              title={"full_name" in film ? "ABOUT" : "DESCRIPTION"}
            />
          ) : (
            ""
          )}
          {reviews && reviews.length > 0 ? (
            <Reviews reviews={reviews} x={0} y={3} alt="first" />
          ) : (
            ""
          )}
          {reviews && reviews.length > 3 ? (
            <Reviews
              reviews={reviews}
              x={3}
              y={reviews.length - 1}
              alt="second"
            />
          ) : (
            ""
          )}
          {reviews && reviews.length > 3 ? (
            <Reviews
              reviews={reviews}
              x={reviews.length - 1}
              y={reviews.length}
              alt="last"
            />
          ) : (
            ""
          )}
          {nominations && nominations.length > 0 ? (
            <Nominations nominations={nominations} alt={alt} />
          ) : (
            ""
          )}
          {collaborators && collaborators.length > 0 ? (
            <Collaborators collaborators={collaborators} />
          ) : (
            ""
          )}

          {images ? <Instagram images={images} alt={alt} /> : ""}
        </Slider>
      ) : (
        <>
          {film && film.description ? (
            <Description
              firstPart={firstPart}
              secondPart={secondPart}
              film={film}
              part={firstPart}
              alt={alt}
              title={"full_name" in film ? "ABOUT" : "DESCRIPTION"}
            />
          ) : (
            ""
          )}

          {reviews && reviews.length > 0 ? (
            <Reviews reviews={reviews} x={0} y={3} alt="first" />
          ) : (
            ""
          )}
          {reviews && reviews.length > 3 ? (
            <Reviews
              reviews={reviews}
              x={3}
              y={reviews.length - 1}
              alt="second"
            />
          ) : (
            ""
          )}
          {reviews && reviews.length > 3 ? (
            <Reviews
              reviews={reviews}
              x={reviews.length - 1}
              y={reviews.length}
              alt="last"
            />
          ) : (
            ""
          )}
          {nominations && nominations.length > 0 ? (
            <Nominations nominations={nominations} />
          ) : (
            ""
          )}
          {collaborators && collaborators.length > 0 ? (
            <Collaborators collaborators={collaborators} />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
