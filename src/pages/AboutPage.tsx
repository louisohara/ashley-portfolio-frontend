import Grid from "../components/Grid/Grid";
import { useState, useEffect } from "react";
import axios from "axios";
import "./About.scss";
import Description from "../components/Description/Description";
import Carousel from "../components/Carousel/Carousel";
import background from "../assets/images/about.jpg";
import background2 from "../assets/images/about2.jpg";
import background3 from "../assets/images/about3.jpeg";
import Marquee from "../components/Marquee/Marquee";
import {
  ClientObject,
  ImageObject,
  NominationsObject,
  userObject,
} from "../types/interfaces/interfaces";
import Scroll from "../components/Scroll/Scroll";

interface AboutPageProps {
  isLoggedIn: boolean;
}
interface Image {
  id: string;
  thumbnailUrl?: string;
  mediaUrl: string;
  caption: string;
  permalink: string;
}
export default function AboutPage({ isLoggedIn }: AboutPageProps) {
  const [user, setUser] = useState<userObject | null>(null);
  const [clients, setClients] = useState<ClientObject[] | null>(null);
  const [images, setImages] = useState<ImageObject[] | null>(null);
  const [nominations, setNominations] = useState<NominationsObject[] | null>(
    null
  );
  const [show, setShow] = useState(false);
  const getImages = async () => {
    try {
      const response = await axios.get(
        "https://feeds.behold.so/yYXOpO4nOkfo6LH0vl7d"
      );
      if (response) {
        const filtered = filteredImage(response.data.posts);

        setImages(filtered);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredImage = (array: Image[]): ImageObject[] => {
    return array.map((image: Image): ImageObject => {
      if ("thumbnailUrl" in image && image.thumbnailUrl) {
        return {
          id: image.id,
          image: image.thumbnailUrl,
          caption: image.caption,
          link: image.permalink,
        };
      } else
        return {
          id: image.id,
          image: image.mediaUrl,
          caption: image.caption,
          link: image.permalink,
        };
    });
  };

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users/1");
      if (response) {
        setUser(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getClients = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/clients");
      if (response) {
        setClients(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getNominations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/nominations/unique"
      );
      if (response) {
        setNominations(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fadeInScroll = () => {
    if (!show) {
      let element = document.querySelector(".about");
      let heroEl = document.querySelector(".about__hero");
      let gridEl = document.querySelector(".about__grid");
      let descriptionEl = document.querySelector(".about__description");
      let carouselEl = document.querySelector(".grid__item--carousel");

      if (element) {
        element.classList.add("active");
        setShow(true);
      }
      if (heroEl) {
        heroEl.classList.add("active");
      }
      if (carouselEl) {
        carouselEl.classList.add("active");
      }
      if (gridEl && descriptionEl) {
        let distInView =
          gridEl.getBoundingClientRect().top - window.innerHeight - 20;
        if (distInView < 0) {
          gridEl.classList.add("inView");
          descriptionEl.classList.add("inView");
        } else {
          gridEl.classList.remove("inView");
          descriptionEl.classList.remove("inView");
        }
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    let element = document.querySelector(".about");
    let heroEl = document.querySelector(".about__hero");
    let carousel = document.querySelector(".grid__item--carousel");
    let gridEl = document.querySelector(".about__grid");
    let descriptionEl = document.querySelector(".about__description");

    if (gridEl) {
      gridEl.classList.remove("inView");
    }
    if (descriptionEl) {
      descriptionEl.classList.remove("inView");
    }
    if (element) {
      element.classList.remove("active");
    }
    if (heroEl) {
      heroEl.classList.remove("active");
    }
    if (carousel) {
      carousel.classList.remove("active");
    }
  };
  useEffect(() => {
    getUser();
    getClients();
    getImages();
    getNominations();
    window.addEventListener("scroll", fadeInScroll);

    return () => {
      window.removeEventListener("scroll", fadeInScroll);
    };
  }, []);

  let hero = [background, background2, background3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % hero.length;
    setCurrentImageIndex(newIndex);
  };

  if (!user || !clients || !nominations) {
    return <div className="loading"></div>;
  }
  return (
    <section className="app__section--about about">
      {/* {!show && ( */}
      <div className="about__top">
        <div className="about__hero">
          <div className="about__background-container">
            <img
              src={hero[currentImageIndex]}
              alt={user.full_name}
              className="about__background"
            />
          </div>
        </div>
        {/* )} */}
        <div className="about__container">
          <div className="about__left">
            {/* {!show && ( */}
            <>
              <div className="about__carousel--outer">
                <div className="about__carousel">
                  <h1 className="about__inner">Director</h1>
                  <h1 className="about__inner">Filmmaker</h1>
                  <h1 className="about__inner">Creator</h1>
                </div>
              </div>

              <div className="about__wrapper">
                <p className="about__bio ">
                  Documentary filmmaker Ashley Francis-Roy makes distinctive,
                  warm and authentic films. His work is emotionally engaging,
                  intimate, and full of joy and humanity.
                </p>
                <p className="about__representation">
                  <span className="about__representation">
                    Ashley is represented by{" "}
                    <a
                      href="https://www.missinglinkfilms.co.uk/"
                      className="about__link"
                    >
                      Missing Link Films
                    </a>{" "}
                    for commercials and branded content.
                  </span>
                </p>
              </div>
            </>
          </div>

          <div className="about__buttons">
            {/* <div className="about__button-container"> */}
            {/* {!show ? (
                <button className="about__button " onClick={fadeInScroll}>
                  Read more
                </button>
              ) : (
                <button
                  className="about__button about__button--alt"
                  onClick={handleClose}
                >
                  Return
                </button>
              )} */}

            {/* </div> */}

            <div className="about__button-container">
              <a href="/contact" className="about__button">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        {!show ? <Scroll handleScroll={fadeInScroll} alt="user" /> : ""}
        {/* )} */}
      </div>
      {/* MOBILE VIEW */}
      <Grid
        alt1="about"
        alt2="carousel"
        alt3="insta"
        user={user}
        clients={clients}
        images={images}
      />

      <div className="about__below">
        <Marquee array={clients} />
        <Marquee array={nominations} alt="alt" />

        {show && (
          <div className="about__grid">
            <Grid
              alt1="about"
              alt2="carousel"
              alt3="insta"
              user={user}
              clients={clients}
              images={images}
            />
          </div>
        )}

        <div className="about__description">
          <Description
            film={user}
            part={user.description}
            alt="about"
            title="ABOUT"
          />
        </div>
      </div>
    </section>
  );
}
