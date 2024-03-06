import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
// import AdminPage from "./pages/AdminPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import FilmPage from "./pages/FilmPage/FilmPage";
import { backendUrl, FilmObject } from "./types/interfaces/interfaces";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [films, setFilms] = useState<FilmObject[] | null>(null);

  const setLoginTrue = () => {
    setIsLoggedIn(true);
  };
  const setLoginFalse = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
  };

  const closeMenu = (): void => {
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__menu");
    if (hamburger) {
      hamburger.classList.remove("active");
    }
    if (headerMenu) {
      headerMenu.classList.remove("active");
    }
  };

  const getFilms = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/films`);
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
    const headerDiv: HTMLElement | null = document.querySelector(".header");

    if (prevScrollPos < currentScrollPos && headerDiv) {
      headerDiv.classList.remove("fixedToTop");
      headerDiv.style.top = "-10rem";

      closeMenu();
    } else {
      if (headerDiv) {
        headerDiv.classList.add("fixedToTop");
        headerDiv.style.top = "0";
      }
    }

    setPrevScrollPos(currentScrollPos);
  };

  const throttle = <T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): T => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    } as any;
  };

  const throttledHandleScroll = throttle(handleScroll, 1000);

  useEffect(() => {
    getFilms();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [prevScrollPos]);
  if (!films) {
    return <div className="loading"></div>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Header closeMenu={closeMenu} menuClosed={true} films={films} />
        <main className="app__main">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isLoggedIn={isLoggedIn}
                  setLoginFalse={setLoginFalse}
                  films={films}
                />
              }
            />
            <Route
              path="/films"
              element={
                <HomePage
                  isLoggedIn={isLoggedIn}
                  setLoginFalse={setLoginFalse}
                  films={films}
                />
              }
            />

            {/* <Route
              path="/admin"
              element={
                <AdminPage
                  isLoggedIn={isLoggedIn}
                  setLoginTrue={setLoginTrue}
                  setLoginFalse={setLoginFalse}
                />
              }
            /> */}
            <Route
              path="/about"
              element={<AboutPage isLoggedIn={isLoggedIn} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/films/:id"
              element={<FilmPage isLoggedIn={isLoggedIn} />}
            />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
