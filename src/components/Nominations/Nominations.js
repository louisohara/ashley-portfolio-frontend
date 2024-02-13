import "./Nominations.scss";

export default function Nominations({ nominations }) {
  const renderNominations = () => {
    if (nominations.length > 0) {
      const n = Math.floor(nominations.length / 2);

      return nominations.slice(0, 6).map((nomination, i) => {
        return (
          <div
            className="nomination"
            key={nomination.id}
            style={
              n > 1
                ? {
                    width: `calc(calc(100%/${n}) - calc(10px * ${n - 1})  )`,
                  }
                : { width: "100%" }
            }
          >
            <div
              className={
                n > 1
                  ? "nomination__wrapper nomination__wrapper--alt"
                  : "nomination__wrapper"
              }
            >
              <div className="nomination__image-container">
                <img
                  src={nomination.logo}
                  alt={nomination.awardshow}
                  className="nomination__image"
                />
              </div>
              <div className="nomination__text">
                <div className="nomination__subtext">
                  <h3 className="nomination__category">
                    {nomination.category}
                  </h3>
                </div>
                <h2 className="nomination__result">{nomination.result}</h2>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="carousel__slide">
      <article className="carousel__content carousel__content--nomination">
        <div className="carousel__nomination">{renderNominations()}</div>
        <h3 className="nomination__awards">AWARDS</h3>
      </article>
    </div>
  );
}
