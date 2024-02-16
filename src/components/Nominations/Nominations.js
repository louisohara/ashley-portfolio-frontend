import "./Nominations.scss";

export default function Nominations({ nominations, alt }) {
  const renderNominations = () => {
    if (nominations.length > 0) {
      const n = Math.floor(nominations.length / 2);

      return nominations.slice(0, 6).map((nomination, i) => {
        return (
          <div
            className={`nomination nomination--${alt}`}
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
              <div
                className={`nomination__image-container nomination__image-container--${alt}`}
              >
                <img
                  src={nomination.logo}
                  alt={nomination.awardshow ? nomination.awardshow : "client"}
                  className={`nomination__image nomination__image--${alt}`}
                />
              </div>
              {nomination.result ? (
                <div className="nomination__text">
                  <div className="nomination__subtext">
                    <h3 className="nomination__category">
                      {nomination.category}
                    </h3>
                  </div>
                  <h2 className="nomination__result">{nomination.result}</h2>
                </div>
              ) : (
                ""
              )}
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
        <h3 className="nomination__awards">
          {nominations.result ? "AWARDS" : "CLIENTS"}
        </h3>
      </article>
    </div>
  );
}
