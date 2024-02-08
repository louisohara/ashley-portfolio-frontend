import Films from "../components/Films/Films";

export default function HomePage({ isLoggedIn, setLoginFalse, films }) {
  // const handleClick = () => {
  //   setLoginFalse();
  // };

  if (!films) {
    return <p>loading...</p>;
  }

  return (
    <section className="home app__section app__section--home active">
      <Films children={films} />
      {/* <p>This is the homepage</p>
        {isLoggedIn ? (
          <div className="home__logged-in">
            <p>I'm logged in </p>
            <button onClick={handleClick}>Log Out</button>
          </div>
        ) : (
          <p>I'm not logged in </p>
        )} */}
    </section>
  );
}
