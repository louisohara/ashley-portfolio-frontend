import {
  ClientObject,
  NominationsObject,
} from "../../types/interfaces/interfaces";
import "./Nominations.scss";

interface NominationsProps {
  nominations: Array<NominationsObject> | Array<ClientObject>;
  alt?: string;
}
export default function Nominations({ nominations, alt }: NominationsProps) {
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
                  alt={
                    "awardshow" in nomination && nomination.awardshow
                      ? `${nomination.awardshow}`
                      : "client"
                  }
                  className={`nomination__image nomination__image--${alt}`}
                />
              </div>
              {"result" in nomination &&
              "category" in nomination &&
              nomination.result &&
              nomination.category ? (
                <div className="nomination__text">
                  <div className="nomination__subtext">
                    <h3 className="nomination__category">
                      {"category" in nomination && nomination.category
                        ? `${nomination.category}`
                        : ""}
                    </h3>
                  </div>
                  <h2 className="nomination__result">
                    {"result" in nomination && nomination.result
                      ? `${nomination.result}`
                      : ""}
                  </h2>
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
      <article
        className={`carousel__content carousel__content--nomination carousel__content--nomination--${alt}`}
      >
        <div className="carousel__nomination">{renderNominations()}</div>
        <h3 className={`nomination__awards nomination__awards--${alt}`}>
          {"result" in nominations[0] && nominations[0].result
            ? "AWARDS"
            : "CLIENTS"}
        </h3>
      </article>
    </div>
  );
}
