import { useEffect } from "react";
import "./Films.scss";

export default function Films({ children }) {
  const fadeInScroll = () => {
    let elements = document.querySelectorAll(".films__item");
    elements.forEach((element, i) => {
      if (i > 3) {
        let distInView =
          element.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
          element.classList.add("inView");
        } else {
          element.classList.remove("inView");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", fadeInScroll);

    return () => {
      window.removeEventListener("scroll", fadeInScroll);
    };
  });
  const renderFilms = () => {
    if (children) {
      return children.map((child) => {
        return (
          <li className="films__item" key={child.id}>
            <a href={`/films/${child.id}`} className="films__link">
              <div className="films__image-container">
                <img
                  src={child.image}
                  alt={`${child.title}`}
                  className="films__image"
                />
              </div>
              <span className="films__overlay">
                <p className="films__title">{child.title}</p>
              </span>
            </a>
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
