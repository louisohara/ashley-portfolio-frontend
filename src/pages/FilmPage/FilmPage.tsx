import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import "./FilmPage.scss";
import Scroll from "../../components/Scroll/Scroll";
import { backendUrl } from "../../types/interfaces/interfaces";

interface FilmPageProps {
  isLoggedIn: boolean;
}

export default function FilmPage({ isLoggedIn }: FilmPageProps) {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({
    film: null,
    collaborators: null,
    reviews: null,
    nominations: null,
  });

  const { film, collaborators, reviews, nominations } = data;

  const getFilmDetails = async () => {
    try {
      const [
        filmResponse,
        collaboratorResponse,
        reviewResponse,
        nominationResponse,
      ] = await Promise.all([
        axios.get(`${backendUrl}/api/films/${id}`),
        axios.get(`${backendUrl}/api/films/${id}/collaborators`),
        axios.get(`${backendUrl}/api/films/${id}/reviews`),
        axios.get(`${backendUrl}/api/films/${id}/nominations`),
      ]);

      setData({
        film: filmResponse.data,
        collaborators: collaboratorResponse.data,
        reviews: reviewResponse.data,
        nominations: nominationResponse.data,
      });
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
  if (!data.film || !data.collaborators || !data.reviews || !data.nominations) {
    return <div className="loading"></div>;
  }
  return (
    <section className="film">
      <Grid
        alt1="film"
        alt2="carousel"
        nominations={data.nominations}
        film={data.film}
        collaborators={data.collaborators}
        reviews={data.reviews}
        alt4="details"
      />
      {!show ? <Scroll handleScroll={fadeInScroll} alt="film" /> : ""}
    </section>
  );
}
