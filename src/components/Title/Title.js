import "./Title.scss";

export default function Title({ text, alt }) {
  let titleClass = `title__title title__title--${alt}`;
  if (text.length < 10) {
    titleClass = `title__title title__title--short title__title--${alt}`;
  }
  if (text.length > 15) {
    titleClass = `title__title title__title--long title__title--${alt}`;
  }
  if (text.length > 20) {
    titleClass = `title__title title__title--extra-long title__title--${alt}`;
  }
  return (
    <article className={`title title--${alt}`}>
      <h1 className={titleClass}>{text}</h1>
    </article>
  );
}
