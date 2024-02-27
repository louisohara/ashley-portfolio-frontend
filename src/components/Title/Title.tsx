import "./Title.scss";

interface TitleProps {
  text: string;
  alt?: string;
}

export default function Title({ text, alt }: TitleProps) {
  let titleClass = `title__title title__title--${alt}`;
  if (text.length < 10) {
    titleClass = `title__title title__title--short title__title--${alt}`;
  }
  if (text.length >= 15 && text.length < 20) {
    titleClass = `title__title title__title--long title__title--${alt}`;
  }
  if (text.length >= 20 && text.length < 25) {
    titleClass = `title__title title__title--extra-long title__title--${alt}`;
  }
  if (text.length > 27) {
    titleClass = `title__title title__title--extra-long--2 title__title--${alt}`;
  }
  const firstWord = text.split(" ")[0];
  const remaining = text.split(" ").splice(1).join(" ");
  return (
    <article className={`title title--${alt}`}>
      <h1 className={titleClass}>
        <span className={`title__firstWord--${alt}`}>{firstWord + " "} </span>
        {remaining}
      </h1>
    </article>
  );
}
