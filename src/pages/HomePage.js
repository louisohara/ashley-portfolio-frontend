import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutPage from "./AboutPage";
import DirectingPage from "./DirectingPage";
import ProducingPage from "./ProducingPage";
import ContactPage from "./ContactPage";

export default function HomePage({ isLoggedIn, setLoginFalse }) {
  let { section } = useParams();

  const handleClick = () => {
    setLoginFalse();
  };

  useEffect(() => {
    if (section) {
      const activeEl = document.querySelector(".app__section.active");
      if (activeEl) {
        activeEl.classList.remove("active");
      }

      const sectionEl = document.querySelector(`.app__section--${section}`);
      sectionEl.classList.add("active");
    }
  }, []);

  return (
    <main>
      <section className="home app__section app__section--home active">
        <p>This is the homepage</p>
        {isLoggedIn ? (
          <div className="home__logged-in">
            <p>I'm logged in </p>
            <button onClick={handleClick}>Log Out</button>
          </div>
        ) : (
          <p>I'm not logged in </p>
        )}
      </section>
      <section id="about" className="app__section app__section--about">
        <AboutPage isLoggedIn={isLoggedIn} />
      </section>
      <section id="directing" className="app__section app__section--directing">
        <DirectingPage isLoggedIn={isLoggedIn} />
      </section>
      <section id="producing" className="app__section app__section--producing">
        <ProducingPage isLoggedIn={isLoggedIn} />
      </section>
      <section id="contact" className="app__section app__section--contact">
        <ContactPage isLoggedIn={isLoggedIn} />
      </section>
    </main>
  );
}
