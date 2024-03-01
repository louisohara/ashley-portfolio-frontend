import "./Scroll.scss";

interface ScrollProps {
  handleScroll: () => void;
  alt?: string;
}

export default function Scroll({ handleScroll, alt }: ScrollProps) {
  return (
    <div className={`scroll__button scroll__button--${alt}`}>
      <div className="scroll__arrow-container" onClick={handleScroll}>
        <div className="scroll__arrow"></div>
        <div className="scroll__arrow"></div>
        <div className="scroll__arrow"></div>
      </div>
    </div>
  );
}
