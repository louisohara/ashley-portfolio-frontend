import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "../src/pages/HomePage.js";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import FilmPage from "./pages/FilmPage";
// import DirectingPage from "./pages/DirectingPage";
// import ProducingPage from "./pages/ProducingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoginTrue = () => {
    setIsLoggedIn(true);
  };
  const setLoginFalse = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="app__main">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isLoggedIn={isLoggedIn}
                  setLoginFalse={setLoginFalse}
                />
              }
            />
            <Route
              path="/:section"
              element={
                <HomePage
                  isLoggedIn={isLoggedIn}
                  setLoginFalse={setLoginFalse}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPage
                  isLoggedIn={isLoggedIn}
                  setLoginTrue={setLoginTrue}
                  setLoginFalse={setLoginFalse}
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
          />
          <Route
            path="/about"
            element={<AboutPage isLoggedIn={isLoggedIn} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/:id" element={<FilmPage isLoggedIn={isLoggedIn} />} />
          <Route
            path="/directing"
            element={<DirectingPage isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/producing"
            element={<ProducingPage isLoggedIn={isLoggedIn} />}
          /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
