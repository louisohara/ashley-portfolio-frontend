import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "../src/pages/HomePage.js";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FilmPage from "./pages/FilmPage";
import DirectingPage from "./pages/DirectingPage";
import ProducingPage from "./pages/ProducingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [films, setFilms] = useState(null);

  const setLoginTrue = () => {
    setIsLoggedIn(true);
  };
  const setLoginFalse = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
  };

  const closeMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__menu");
    hamburger.classList.remove("active");
    headerMenu.classList.remove("active");
  };

  const getFilms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/films/");
      if (response) {
        setFilms(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // fixedtotop header animation
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerDiv = document.querySelector(".header");

    if (prevScrollPos <= currentScrollPos) {
      headerDiv.classList.remove("fixedToTop");
      headerDiv.style.top = "-7.2rem";
      closeMenu();
    } else {
      headerDiv.classList.add("fixedToTop");
      headerDiv.style.top = "0";
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    getFilms();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="app">
      <BrowserRouter>
        {/* <Header closeMenu={closeMenu} /> */}
        {/* <main className="app__main"> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={true} />
                <main className="app__main">
                  <HomePage
                    isLoggedIn={isLoggedIn}
                    setLoginFalse={setLoginFalse}
                    films={films}
                  />
                </main>
              </>
            }
          />
          <Route
            path="/films"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={false} />
                <main className="app__main">
                  <HomePage
                    isLoggedIn={isLoggedIn}
                    setLoginFalse={setLoginFalse}
                    films={films}
                  />
                </main>
              </>
            }
          />

          <Route
            path="/admin"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={false} />
                <main className="app__main">
                  <AdminPage
                    isLoggedIn={isLoggedIn}
                    setLoginTrue={setLoginTrue}
                    setLoginFalse={setLoginFalse}
                  />
                </main>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={false} />
                <main className="app__main">
                  <AboutPage isLoggedIn={isLoggedIn} />
                </main>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={false} />
                <main className="app__main">
                  <ContactPage />
                </main>
              </>
            }
          />
          <Route
            path="/films/:id"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={true} />
                <main className="app__main">
                  <FilmPage isLoggedIn={isLoggedIn} />
                </main>
              </>
            }
          />
          <Route
            path="/directing"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={false} />
                <main className="app__main">
                  <DirectingPage isLoggedIn={isLoggedIn} films={films} />
                </main>
              </>
            }
          />
          <Route
            path="/producing"
            element={
              <>
                <Header closeMenu={closeMenu} menuClosed={false} />
                <main className="app__main">
                  <ProducingPage isLoggedIn={isLoggedIn} films={films} />
                </main>
              </>
            }
          />
        </Routes>
        {/* </main> */}
        <div className="app__undercolour"></div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
