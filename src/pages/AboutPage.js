import Grid from "../components/Grid/Grid";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AboutPage({ isLoggedIn }) {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState(null);

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
  }, []);

  if (!user || !clients) {
    return <div className="loading">loading..</div>;
  }
  return (
    <section className="about">
      <Grid alt1="about" alt2="carousel" user={user} clients={clients} />
    </section>
  );
}
