import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import { useEffect } from "react";

// ADD FIREBASE FOR CV AND IMAGES STORAGE AND CONNECT WITH EDIT FUNCTIONS

export default function AdminPage({ isLoggedIn, setLoginTrue, setLoginFalse }) {
  const nav = useNavigate();

  const handleClick = () => {
    setLoginFalse();
    nav("/");
  };
  const login = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLoginTrue();
    } else {
      setLoginFalse();
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <section className="admin">
      <p>Hey</p>
      {/* <button onClick={handleClick}>Log in</button> */}
      {isLoggedIn ? (
        <button onClick={handleClick}>Log out</button>
      ) : (
        <Login setLoginTrue={setLoginTrue} />
      )}
    </section>
  );
}
