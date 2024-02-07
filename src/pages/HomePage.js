import { useEffect } from "react";
import Films from "../components/Films/Films";
import axios from "axios";
import { useState } from "react";

export default function HomePage({ isLoggedIn, setLoginFalse }) {
  const [films, setFilms] = useState(null);

  const handleClick = () => {
    setLoginFalse();
  };

  const getFilms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/films/");
      if (response) {
        console.log(response);
        setFilms(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <section className="home app__section app__section--home active">
      <Films children={films} />
      {/* <p>This is the homepage</p>
        {isLoggedIn ? (
          <div className="home__logged-in">
            <p>I'm logged in </p>
            <button onClick={handleClick}>Log Out</button>
          </div>
        ) : (
          <p>I'm not logged in </p>
        )} */}
    </section>
  );
}
