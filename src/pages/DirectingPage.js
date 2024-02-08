import { useState, useEffect } from "react";

import Films from "../components/Films/Films";

export default function DirectingPage({ isLoggedIn, films }) {
  const [directing, setDirecting] = useState(null);

  useEffect(() => {
    if (films) {
      const directed = films.filter((film) => {
        return film.category === "directing";
      });

      setDirecting(directed);
    }
  }, [films]);

  if (!films) {
    return <p>loading...</p>;
  }
  return (
    <section className="directing">
      <h1 className="directing__title">DIRECTING</h1>
      <Films children={directing} />
    </section>
  );
}
