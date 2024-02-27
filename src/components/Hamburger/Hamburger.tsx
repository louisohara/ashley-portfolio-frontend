import "./Hamburger.scss";

interface HamburgerProps {
  menuClosed: boolean;
}
export default function Hamburger({ menuClosed }: HamburgerProps) {
  const mobileMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__menu");
    if (hamburger && headerMenu) {
      hamburger.classList.toggle("active");
      headerMenu.classList.toggle("active");
    }
  };
  return (
    <div
      className={menuClosed ? "hamburger" : "hamburger active"}
      onClick={mobileMenu}
    >
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
}
