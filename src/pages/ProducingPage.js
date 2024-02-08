import { useState, useEffect } from "react";

import Films from "../components/Films/Films";

export default function ProducingPage({ isLoggedIn, films }) {
  const [producing, setProducing] = useState(null);

  useEffect(() => {
    if (films) {
      const produced = films.filter((film) => {
        return film.category === "producing";
      });

      setProducing(produced);
    }
  }, [films]);

  if (!films) {
    return <p>loading...</p>;
  }

  return (
    <section className="producing">
      <h1 className="producing__title">PRODUCING</h1>
      <Films children={producing} />
    </section>
  );
}
