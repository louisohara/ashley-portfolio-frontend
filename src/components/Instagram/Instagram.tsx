import { ImageObject } from "../../types/interfaces/interfaces";
import "./Instagram.scss";

interface InstagramProps {
  images: Array<ImageObject> | ImageObject;
  alt?: string;
}

export default function Instagram({ images, alt }: InstagramProps) {
  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {images && Array.isArray(images) ? (
        <div className="carousel__slide">
          <article className="carousel__content carousel__content--insta">
            <div className="carousel__nomination insta">
              {images.slice(0, 4).map((image) => {
                return (
                  <a
                    href={image.link}
                    id={image.id}
                    className="insta__link"
                    key={image.id}
                  >
                    <div className="insta__image-container">
                      <img
                        className="insta__image"
                        src={image.image}
                        alt={image.caption}
                      />
                    </div>
                    <span className="insta__overlay">
                      <p className={`insta__title insta__title--${alt}`}>
                        @ashfranroy
                      </p>
                    </span>
                  </a>
                );
              })}
            </div>
            <h3
              className={`nomination__awards nomination__awards--user insta__header insta__header--${alt}`}
            >
              FEED
            </h3>
          </article>
        </div>
      ) : (
        <a
          href={images.link}
          id={images.id}
          className={`insta__link insta__link--${alt}`}
          key={images.id}
        >
          <div className="insta__image-container">
            <img
              className="insta__image"
              src={images.image}
              alt={images.caption}
            />
          </div>
          <span className="insta__overlay">
            <p className={`insta__title insta__title--${alt}`}>@ashfranroy</p>
          </span>
        </a>
      )}
    </>
  );
}
