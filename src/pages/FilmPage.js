import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid/Grid";
import Carousel from "../components/Carousel/Carousel";

export default function FilmPage({ isLoggedIn }) {
  const [film, setFilm] = useState(null);
  const [collaborators, setCollaborators] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [nominations, setNominations] = useState(null);

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

  const renderFilm = () => {};

  useEffect(() => {
    getFilmDetails();
  }, []);
  if (!film || !collaborators || !reviews || !nominations) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <section className="film">
      {/* {film.title}
      {collaborators[0].title}
      {reviews.length > 0 ? reviews[0].author : ""}
      {nominations.length > 0 ? nominations[0].result : ""} */}
      <Grid
        alt1="film"
        alt2="carousel"
        nominations={nominations}
        film={film}
        collaborators={collaborators}
        reviews={reviews}
      />
      {/* <Carousel /> */}
    </section>
  );
}
