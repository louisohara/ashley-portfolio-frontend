import Films from "../components/Films/Films";
import { FilmObject } from "../types/interfaces/interfaces";

interface HomePageProps {
  isLoggedIn: boolean;
  setLoginFalse: () => void;
  films: FilmObject[];
}

export default function HomePage({
  isLoggedIn,
  setLoginFalse,
  films,
}: HomePageProps) {
  // const handleClick = () => {
  //   setLoginFalse();
  // };

  if (!films) {
    return <div className="loading"></div>;
  }

  return (
    <section className="app__section app__section--home">
      <Films films={films} />
      {/* <p>This is the homepage</p>
        {isLoggedIn ? (
          <div className="home__logged-in">
            <p>I'm logged in </p>
            <button onClick={handleClick}>Log Out</button>
          </div>
        ) : (
          <p>I'm not logged in </p>
        )} */}

      <div className="app__undercolour"></div>
    </section>
  );
}
