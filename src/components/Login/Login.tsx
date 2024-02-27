import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Input/Input";

// import "../components/Login/Login.scss";

interface LoginProps {
  setLoginTrue: () => void;
}
export default function Login({ setLoginTrue }: LoginProps) {
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    try {
      let email: string = "";
      let password: string = "";

      if ("target" in event && event.target instanceof HTMLInputElement) {
        // It's a ChangeEvent<HTMLInputElement>
        const target = event.target as HTMLInputElement;
        if (target.name === "email") {
          email = target.value;
        } else if (target.name === "password") {
          password = target.value;
        }
      } else {
        // It's a FormEvent<HTMLFormElement>
        const formData = new FormData(event.target as HTMLFormElement);
        email = formData.get("email") as string;
        password = formData.get("password") as string;
      }

      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      sessionStorage.setItem("token", response.data.token);
      setLoginTrue();
      nav("/");
    } catch (error: any) {
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
