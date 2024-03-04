import "./Title.scss";

interface TitleProps {
  text: string;
  alt?: string;
}

export default function Title({ text, alt }: TitleProps) {
  let titleClass = `title__title title__title--${alt} title__${
    text.split(" ")[1]
  }`;
  if (text.length < 10) {
    titleClass = `title__title title__${
      text.split(" ")[1]
    } title__title--short title__title--${alt}`;
  }
  if (text.length >= -15 && text.length < 20) {
    titleClass = `title__title title__${
      text.split(" ")[1]
    } title__title--long title__title--${alt}`;
  }
  if (text.length >= 20 && text.length < 25) {
    titleClass = `title__title title__${
      text.split(" ")[1]
    } title__title--extra-long title__title--${alt}`;
  }
  if (text.length > 27) {
    titleClass = `title__title title__${
      text.split(" ")[1]
    } title__title--extra-long--2 title__title--${alt}`;
  }
  const words = text.split(" ");

  const wrappedWords = words.map((word, index) => {
    if (word.length > 8) {
      return (
        <span key={index} className="title__longword">
          {word}
        </span>
      );
    }
    return word;
  });

  const firstWord = wrappedWords.shift(); // Take first word with potential span wrapping

  // Convert first word to string if it's a JSX element
  const firstWordContent =
    typeof firstWord === "object" ? firstWord.props.children : firstWord;

  const remaining = wrappedWords.length > 0 ? wrappedWords : null;

  return (
    <article className={`title title--${alt}`}>
      <h1 className={titleClass}>
        {firstWord && (
          <span className={`title__firstWord--${alt}`}>
            {firstWordContent}{" "}
          </span>
        )}
        {remaining &&
          remaining.map((word, index) => <span key={index}>{word} </span>)}
      </h1>
    </article>
  );
}
