import screen1 from "../img/app/app-screen-1.png";
import screen2 from "../img/app/app-screen-2.png";
import screen3 from "../img/app/app-screen-3.png";

export default function HowSection() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Personalized Meals, Perfected in 3 Steps
        </h2>
      </div>

      <div className="container grid grid--2--cols grid--center-v">
        {/* STEP 01 */}
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>

          <p className="step-description">
            {/* Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow! */}
            Start by customizing your preferences. Choose ingredients you love
            and dislike to include/exclude from your meals.
          </p>
        </div>

        <div className="step-img-box">
          <img
            src={screen1}
            className="step-img"
            alt="iPhone app preference selection screen"
          />
        </div>

        {/* STEP 02 */}
        <div className="step-img-box">
          <img
            src={screen2}
            className="step-img"
            alt="iPhone app meal approving plan screen"
          />
        </div>

        <div className="step-text-box">
          <p className="step-number">02</p>
          {/* <h3 className="heading-tertiary">Approve your weekly meal plan</h3> */}
          <h3 className="heading-tertiary">
            Order your meal and feedback right away
          </h3>
          <p className="step-description">
            Place your order and your meal will be delivered to your door. After
            enjoying your meal, let us know what worked, what didn’t, and how we
            can improve your experience.{" "}
          </p>
        </div>

        {/* STEP 03 */}
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">
            Enjoy an Even Better Experience Next Time
          </h3>
          <p className="step-description">
            Whether you want more spice, fewer carbs, or new flavors, your next
            delivery will always be more tailored to you.
          </p>
        </div>

        <div className="step-img-box">
          <img
            src={screen3}
            className="step-img"
            alt="iPhone app preference selection screen"
          />
        </div>
      </div>
    </section>
  );
}
