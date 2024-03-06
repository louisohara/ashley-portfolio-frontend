import { useEffect } from "react";
import "./Films.scss";
import { FilmObject } from "../../types/interfaces/interfaces";

interface FilmsProps {
  films: FilmObject[];
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
  const handleMouseEnter = (child: FilmObject) => {
    const image = document.querySelector(`.films__image--${child.id}`);
    const title = document.querySelector(`.films__title--${child.id}`);
    if (image) {
      image.classList.add("active");
    }
    if (title) {
      title.classList.add("active");
    }
  };

  const handleMouseLeave = (child: FilmObject) => {
    const image = document.querySelector(`.films__image--${child.id}`);
    const title = document.querySelector(`.films__title--${child.id}`);
    if (image) {
      image.classList.remove("active");
    }
    if (title) {
      title.classList.remove("active");
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
            className={
              i <= 2
                ? "films__item films__item--alt"
                : i < 5
                ? "films__item films__item--hidden films__item--alt inView"
                : "films__item films__item--hidden"
            }
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
                onTouchStart={() => handleMouseEnter(child)}
                onMouseLeave={() => {
                  handleMouseLeave(child);
                }}
                onTouchEnd={() => handleMouseLeave(child)}
              >
                <p className={`films__title films__title--${child.id}`}>
                  {child.title}
                </p>
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
