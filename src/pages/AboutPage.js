import Grid from "../components/Grid/Grid";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AboutPage({ isLoggedIn }) {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState(null);
  const [images, setImages] = useState(null);

  const getImages = async () => {
    try {
      const response = await axios.get(
        "https://feeds.behold.so/yJrGA0gr3aRuzBX8v8Qp"
      );
      if (response) {
        const filtered = filteredImage(response.data);
        setImages(filtered);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const filteredImage = (array) => {
    return array.map((image) => {
      if (image.thumbnailUrl) {
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
  useEffect(() => {
    getUser();
    getClients();
    getImages();
  }, []);

  if (!user || !clients) {
    return <div className="loading">loading..</div>;
  }
  return (
    <section className="app__section--about">
      <Grid
        alt1="about"
        alt2="carousel"
        user={user}
        clients={clients}
        images={images}
      />
      {/* <Instagram /> */}
    </section>
  );
}
