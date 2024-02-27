import "./Marquee.scss";

export default function Marquee({ array, alt }) {
  const renderArray = () => {
    return (
      <>
        {array.map((item, index) => (
          <div key={index} className="marquee__item-container ">
            {item.link ? (
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
                alt={item.category ? item.category : "Client"}
                title={`${item.awardshow} - ${item.category} - ${item.result}`}
                className={
                  item.awardshow
                    ? `marquee__item ${item.awardshow}`
                    : "marquee__item "
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
