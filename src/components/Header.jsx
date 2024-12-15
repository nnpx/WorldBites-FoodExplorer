import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import omnifoodLogo from "../img/omnifoodLogo.png";
import Button from "./UI/Button";

import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../store/userProgressSlice";

export default function Header() {
  const toggleNav = () => {
    const headerEl = document.querySelector(".header");
    headerEl.classList.toggle("nav-open");
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const totalCartItems = cartState.items.reduce((totalNumberOfItems, item) => {
    // initail value of totalNumberOfItems is 0
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    dispatch(showCart());
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="logo" alt="Omnifood logo" src={omnifoodLogo} />
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <HashLink smooth to="/#how">
              How it works
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/meals">
              Menu
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#testimonials">
              Testimonials
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#pricing">
              Pricing
            </HashLink>
          </li>
          <li>
            {/* <a href="#cta" className="nav-cta"> */}
            {isHomePage ? (
              <Link to="/meals" className="main-nav-list nav-cta">
                Try for free
              </Link>
            ) : (
              <Button className="cart" onClick={handleShowCart}>
                Your Cart ({totalCartItems})
              </Button>
            )}
            {/* </a> */}
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
