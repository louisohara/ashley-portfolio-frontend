import "./Films.scss";

export default function Films({ children }) {
  const renderFilms = () => {
    if (children) {
      return children.map((child) => {
        return (
          <li className="films__item" key={child.id}>
            {/* <a href={`/films/${child.id}`} className="films__link"> */}
            <div className="films__image-container">
              <img
                src={child.image}
                alt={`Image of ${child.title}`}
                className="films__image"
              />
            </div>
            <span className="films__overlay">
              <p className="films__title">{child.title}</p>
            </span>
            {/* </a> */}
          </li>
        );
      });
    }
  };
  return (
    <div className="films">
      <ul className="films__grid">{renderFilms()}</ul>
    </div>
  );
}
