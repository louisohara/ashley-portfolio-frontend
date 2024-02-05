export default function HomePage({ isLoggedIn, setLoginFalse }) {
  console.log(setLoginFalse);

  const handleClick = () => {
    setLoginFalse();
  };

  return (
    <section className="home">
      <p>Hey</p>
      {isLoggedIn ? (
        <div className="home__logged-in">
          <p>I'm logged in </p>
          <button onClick={handleClick}>Log Out</button>
        </div>
      ) : (
        <p>I'm not logged in </p>
      )}
    </section>
  );
}
