import customer1 from "../img/customers/dave.jpg";
import customer2 from "../img/customers/ben.jpg";
import customer3 from "../img/customers/steve.jpg";
import customer4 from "../img/customers/hannah.jpg";

import gal1 from "../img/gallery/gallery-1.jpg";
import gal2 from "../img/gallery/gallery-2.jpg";
import gal3 from "../img/gallery/gallery-3.jpg";
import gal4 from "../img/gallery/gallery-4.jpg";
import gal5 from "../img/gallery/gallery-5.jpg";
import gal6 from "../img/gallery/gallery-6.jpg";
import gal7 from "../img/gallery/gallery-7.jpg";
import gal8 from "../img/gallery/gallery-8.jpg";
import gal9 from "../img/gallery/gallery-9.jpg";
import gal10 from "../img/gallery/gallery-10.jpg";
import gal11 from "../img/gallery/gallery-11.jpg";
import gal12 from "../img/gallery/gallery-12.jpg";

export default function TestimonialsSection() {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={customer1}
              alt="Photo of customer Dave Bryson"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={customer2}
              alt="Photo of customer Ben Hadley"
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={customer3}
              alt="Photo of customer Steve MillerDave Bryson"
            />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={customer4}
              alt="Photo of customer Hannah Smith"
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className="gallery">
        <figure className="gallery-item">
          <img src={gal1} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal2} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal3} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal4} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal5} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal6} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal7} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal8} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal9} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal10} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal11} alt="Photo of beautifully arranged food" />
        </figure>

        <figure className="gallery-item">
          <img src={gal12} alt="Photo of beautifully arranged food" />
        </figure>
      </div>
    </section>
  );
}
