import { Fragment } from "react";
import "./Description.scss";
import { PropsObject } from "../../types/interfaces/interfaces";

interface DescriptionProps {
  film: PropsObject;
  part: string;
  firstPart?: string;
  secondPart?: string;
  alt?: string;
  title?: string;
}

export default function Description({
  film,
  part,
  firstPart,
  secondPart,
  alt,
  title,
}: DescriptionProps) {
  const renderDescriptionSliced = (text: string) => {
    const firstNewLineIndex = text.indexOf("\n");

    if (firstNewLineIndex === 0 || firstNewLineIndex === 1) {
      return [<Fragment key={0}>{text}</Fragment>];
    } else {
      return text.split("\n").map((paragraph, index) => (
        <Fragment key={index}>
          {paragraph}
          {index < text.split("\n").length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </Fragment>
      ));
    }
  };

  const renderDescription = () => {
    if (film.description.length < 450) {
      return (
        <div className={"carousel__slide"}>
          <div
            className={`carousel__content carousel__content--description carousel__content--${alt}`}
          >
            <h3 className={`description__title description__title--${alt}`}>
              {title}
            </h3>
            <article className={`description description--${alt}`}>
              {renderDescriptionSliced(film.description)}
            </article>
          </div>
        </div>
      );
    } else {
      return (
        <div className={"carousel__slide"}>
          <div
            className={`carousel__content carousel__content--description carousel__content--${alt}`}
          >
            <h3 className={`description__title description__title--${alt}`}>
              {title}
            </h3>
            <article
              className={
                part === secondPart
                  ? `description description--${alt} description--long description--second description--second--${alt} description--long--${alt}`
                  : `description description--${alt} description--long description--long--${alt}`
              }
            >
              {renderDescriptionSliced(part)}
              <br />
              {part === firstPart ? "..." : ""}
            </article>
          </div>
        </div>
      );
    }
  };
  return <>{renderDescription()}</>;
}
