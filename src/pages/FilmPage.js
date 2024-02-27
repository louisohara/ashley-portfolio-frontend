import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid/Grid";
import "./Film.scss";

export default function FilmPage({ isLoggedIn }) {
  const [film, setFilm] = useState(null);
  const [collaborators, setCollaborators] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [nominations, setNominations] = useState(null);
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const getFilmDetails = async () => {
    try {
      const filmResponse = await axios.get(
        `http://localhost:8080/api/films/${id}`
      );
      const collaboratorResponse = await axios.get(
        `http://localhost:8080/api/films/${id}/collaborators`
      );
      const reviewResponse = await axios.get(
        `http://localhost:8080/api/films/${id}/reviews`
      );
      const nominationResponse = await axios.get(
        `http://localhost:8080/api/films/${id}/nominations`
      );
      if (filmResponse) {
        setFilm(filmResponse.data);
      }
      if (collaboratorResponse) {
        setCollaborators(collaboratorResponse.data);
      }
      if (reviewResponse) {
        setReviews(reviewResponse.data);
      }
      if (nominationResponse) {
        setNominations(nominationResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  let count = 0;
  const scrollDistance = window.innerHeight * 0.5;
  const fadeInScroll = () => {
    if (!show && count === 0) {
      let element = document.querySelector(".grid__item--carousel");
      if (element) {
        element.classList.add("active");
        setShow(true);
        count++;

        window.scrollBy({
          top: scrollDistance,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    getFilmDetails();

    window.addEventListener("scroll", fadeInScroll);

    return () => {
      window.removeEventListener("scroll", fadeInScroll);
    };
  }, []);
  if (!film || !collaborators || !reviews || !nominations) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <section className="film">
      <Grid
        alt1="film"
        alt2="carousel"
        nominations={nominations}
        film={film}
        collaborators={collaborators}
        reviews={reviews}
        alt4="details"
      />
      {!show ? (
        <div className="film__button">
          <div className="film__arrow-container" onClick={fadeInScroll}>
            {/* Read more */}

            <div className="film__arrow"></div>
            <div className="film__arrow"></div>
            <div className="film__arrow"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
