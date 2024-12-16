import { HashLink } from "react-router-hash-link";

export default function PricingSection() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Flexible Pricing to Suit Every Foodie
        </h2>
      </div>

      <div className="container grid grid--2--cols margin-bottom-md">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Basic</p>
            <p className="plan-price">
              <span>$</span>10
            </p>
            <p className="plan-text">per meal, pay as you go.</p>
          </header>

          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>1 meal each</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>$2 Delivery</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="close-outline"></ion-icon>
              <span></span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <HashLink
              smooth
              to="/menu"
              className="btn btn--full margin-right-sm"
            >
              Order now
            </HashLink>
          </div>
        </div>

        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Meal plan</p>
            <p className="plan-price">
              <span>$</span>259
            </p>
            <p className="plan-text">
              <strong>per month</strong>. That's just $8 per meal!
            </p>
          </header>

          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>
                Delivery is <strong>free</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <HashLink
              smooth
              to="/menu"
              className="btn btn--full margin-right-sm"
            >
              Order now
            </HashLink>
          </div>
        </div>
      </div>

      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes.
          {/* Users can cancel at any time.
          Both plans include the following: */}
        </aside>
      </div>

      {/* 
      <div className="container grid grid--4--cols">
        <div className="feature">
          <ion-icon className="feature-icon" name="infinite-outline"></ion-icon>
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <ion-icon
            className="feature-icon"
            name="nutrition-outline"
          ></ion-icon>
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <ion-icon className="feature-icon" name="leaf-outline"></ion-icon>
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <ion-icon className="feature-icon" name="pause-outline"></ion-icon>
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div> */}
    </section>
  );
}
