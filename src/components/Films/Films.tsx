import { useEffect } from "react";
import "./Films.scss";
import { filmObject } from "../../types/interfaces/interfaces";

interface FilmsProps {
  films: filmObject[];
}

export default function Films({ films }: FilmsProps) {
  const fadeInScroll = () => {
    let elements = document.querySelectorAll(".films__item");
    elements.forEach((element, i) => {
      if (i > 2) {
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
  const handleMouseEnter = (child: filmObject) => {
    const image = document.querySelector(`.films__image--${child.id}`);

    if (image) {
      image.classList.add("active");
    }
  };

  const handleMouseLeave = (child: filmObject) => {
    const image = document.querySelector(`.films__image--${child.id}`);

    if (image) {
      image.classList.remove("active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fadeInScroll);

    return () => {
      window.removeEventListener("scroll", fadeInScroll);
    };
  }, []);
  const renderFilms = () => {
    if (films) {
      return films.slice(0, 12).map((child, i) => {
        return (
          <li
            className={i <= 5 ? "films__item films__item--alt" : "films__item"}
            key={child.id}
          >
            <a href={`/films/${child.id}`} className="films__link">
              <div className="films__image-container">
                <img
                  src={child.image}
                  alt={`${child.title}`}
                  className={`films__image films__image--${child.id}`}
                />
              </div>
              <span
                className="films__overlay"
                onMouseEnter={() => {
                  handleMouseEnter(child);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(child);
                }}
              >
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
