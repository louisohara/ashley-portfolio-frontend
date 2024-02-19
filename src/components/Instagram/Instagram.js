import "./Instagram.scss";

export default function Instagram({ images }) {
  if (!images) {
    return <div>Loading...</div>;
  }
  return (
    <div className="carousel__slide">
      <article className="carousel__content carousel__content--insta">
        <div className="carousel__nomination insta">
          {images.map((image) => {
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
                  <p className="insta__title">@ashfranroy</p>
                </span>
              </a>
            );
          })}
        </div>
        <h3 className="nomination__awards">INSTAGRAM</h3>
      </article>
    </div>
  );
}
