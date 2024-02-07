import "./Hamburger.scss";

export default function Hamburger() {
  const mobileMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__menu");

    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
  };
  return (
    <div className="hamburger active" onClick={mobileMenu}>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
}
