import { useEffect, useState } from "react";
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

  const [startX, setStartX] = useState<number | null>(null);
  const [startY, setStartY] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLSpanElement>) => {
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLSpanElement>,
    child: FilmObject
  ) => {
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const dx = Math.abs(endX - (startX || 0));
    const dy = Math.abs(endY - (startY || 0));

    if (dx < 10 && dy < 10) {
      const overlay = document.querySelector(`.films__overlay--${child.id}`);
      if (overlay) {
        overlay.classList.add("active");
      }
    }
  };

  const handleMouseEnter = (child: FilmObject) => {
    const image = document.querySelector(`.films__image--${child.id}`);

    if (image) {
      image.classList.add("active");
    }
  };

  const handleMouseLeave = (child: FilmObject) => {
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
                className={`films__overlay films__overlay--${child.id}`}
                onMouseEnter={() => {
                  handleMouseEnter(child);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(child);
                }}
                onTouchStart={(event) => {
                  handleTouchStart(event);
                }}
                onTouchEnd={(event) => {
                  handleTouchEnd(event, child);
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
