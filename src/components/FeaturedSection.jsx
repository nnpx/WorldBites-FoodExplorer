import techcrunch from "../img/logos/techcrunch.png";
import businessInsider from "../img/logos/business-insider.png";
import NYT from "../img/logos/the-new-york-times.png";
import forbes from "../img/logos/forbes.png";
import usaToday from "../img/logos/usa-today.png";

export default function FeaturedSection() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={techcrunch} alt="Techcrunch logo" />
          <img src={businessInsider} alt="Business Insider logo" />
          <img src={NYT} alt="The new york times logo" />
          <img src={forbes} alt="Forbes logo" />
          <img src={usaToday} alt="USA today logo" />
        </div>
      </div>
    </section>
  );
}
