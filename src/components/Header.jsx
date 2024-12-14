import { Link } from "react-router-dom";

import omnifoodLogo from "../img/omnifoodLogo.png";

export default function Header() {
  const toggleNav = () => {
    const headerEl = document.querySelector(".header");
    headerEl.classList.toggle("nav-open");
  };

  return (
    <header className="header">
      {/* <Link to="/"> */}
      <img className="logo" alt="Omnifood logo" src={omnifoodLogo} />
      {/* </Link> */}

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#meals">Meals</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#cta" className="nav-cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={toggleNav}>
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}
