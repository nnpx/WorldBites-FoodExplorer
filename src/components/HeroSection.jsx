import customerImg1 from "../img/customers/customer-1.jpg";
import customerImg2 from "../img/customers/customer-2.jpg";
import customerImg3 from "../img/customers/customer-3.jpg";
import customerImg4 from "../img/customers/customer-4.jpg";
import customerImg5 from "../img/customers/customer-5.jpg";
import customerImg6 from "../img/customers/customer-6.jpg";
import heroImg from "../img/heroImg.png";

import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            {/* A healthy meal delivered to your door, every single day */}
            Taste the World, One Meal at a Time
          </h1>
          <p className="hero-description">
            {/* The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. */}
            Freshly prepared dishes from around the globe delivered straight to
            your door. Perfectly crafted to suit your taste and dietary
            preferences, every meal brings a new story to your table.
          </p>
          <HashLink smooth to="/menu" className="btn btn--full margin-right-sm">
            Order Now
          </HashLink>
          <HashLink smooth to="/#how" className="btn btn--outline">
            Learn more &darr;
          </HashLink>

          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={customerImg1} alt="customer photo" />
              <img src={customerImg2} alt="customer photo" />
              <img src={customerImg3} alt="customer photo" />
              <img src={customerImg4} alt="customer photo" />
              <img src={customerImg5} alt="customer photo" />
              <img src={customerImg6} alt="customer photo" />
            </div>
            <p className="delivered-text">
              <span>250,000+ meals</span> delivered last year!
            </p>
          </div>
        </div>

        <div className="hero-img-box">
          <picture>
            {/* <source srcSet="img/hero.webp" type="image/webp" />
            <source srcSet="img/hero-min.png" type="image/png" /> */}
            <img
              src={heroImg}
              className="hero-img"
              alt="Women enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
