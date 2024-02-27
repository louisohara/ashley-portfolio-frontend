import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Collaborators from "../Collaborators/Collaborators";
import Reviews from "../Reviews/Reviews";
import Description from "../Description/Description";
import Nominations from "../Nominations/Nominations";
import Instagram from "../Instagram/Instagram";
import Poster from "../Poster/Poster";
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
    // autoplay: true,
    // controls slide scroll duration
    speed: 500,
    // controls slide stay duration
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    swipeToSlide: true,
  };

  // Split the description at the nearest paragraph break around the limit mark
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
              title="DESCRIPTION"
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
              title="DESCRIPTION"
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
          {collaborators && collaborators.length > 0 ? (
            <Collaborators collaborators={collaborators} />
          ) : (
            ""
          )}
          {nominations && nominations.length > 0 ? (
            <Nominations nominations={nominations} alt={alt} />
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
              title="DESCRIPTION"
            />
          ) : (
            ""
          )}
          {/* DO NOT DELETE */}
          {/* {film.description && secondPart ? (
            <Description
              firstPart={firstPart}
              secondPart={secondPart}
              film={film}
              part={secondPart}
            />
          ) : (
            ""
          )} */}
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
          {collaborators && collaborators.length > 0 ? (
            <Collaborators collaborators={collaborators} />
          ) : (
            ""
          )}
          {nominations && nominations.length > 0 ? (
            <Nominations nominations={nominations} />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
