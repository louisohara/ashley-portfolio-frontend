import {
  NominationsObject,
  ClientObject,
} from "../../types/interfaces/interfaces";
import "./Marquee.scss";

interface MarqueeProps {
  array: Array<NominationsObject> | Array<ClientObject>;
  alt?: string;
}

export default function Marquee({ array, alt }: MarqueeProps) {
  const renderArray = () => {
    return (
      <>
        {array.map((item, index) => (
          <div key={index} className="marquee__item-container ">
            {"link" in item && item.link ? (
              <a href={item.link}>
                <img
                  src={item.logo}
                  alt={item.category ? item.category : "Client"}
                  title={`${item.awardshow} - ${item.category} - ${item.result}`}
                  className={
                    item.awardshow
                      ? `marquee__item ${item.awardshow}`
                      : "marquee__item "
                  }
                />
              </a>
            ) : (
              <img
                src={item.logo}
                alt={
                  "category" in item && item.category ? item.category : "Client"
                }
                title={
                  "awardshow" in item && item.awardshow
                    ? `${item.awardshow} - ${item.category} - ${item.result}`
                    : ""
                }
                className={
                  "awardshow" in item && item.awardshow
                    ? `marquee__item ${item.awardshow}`
                    : `marquee__item marquee__item--${item.id}`
                }
              />
            )}
          </div>
        ))}
      </>
    );
  };
  return (
    <div className={`marquee marquee--${alt}`}>
      <div className={`marquee__inner marquee__inner--${alt}`}>
        {renderArray()}
        {renderArray()}
      </div>
    </div>
  );
}
