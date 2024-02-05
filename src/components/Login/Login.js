import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Input/Input";

// import "../components/Login/Login.scss";

export default function Login({ setLoginTrue }) {
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      sessionStorage.setItem("token", response.data.token);
      setLoginTrue();
      nav("/");
    } catch (error) {
      console.error(error);
      setError(error.response.data);
    }
  };
  return (
    <div className="login__container">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="login__button">Log in</button>
        {error && <div className="login__message">{error}</div>}
      </form>
    </div>
  );
}
