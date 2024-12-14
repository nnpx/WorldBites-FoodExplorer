import meal1 from "../img/meals/meal-1.jpg";
import meal2 from "../img/meals/meal-4.png";
import "ionicons";

export default function MealSection() {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Explore Authentic Flavors from Around the Globe
        </h2>
      </div>

      <div className="container grid grid--3--cols margin-bottom-md">
        <div className="meal">
          <img src={meal1} className="meal-img" alt="Japanese Gyozas" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Japanese</span>
            </div>
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>650 calories</span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="meal">
          <img src={meal2} className="meal-img" alt="Lasagna " />
          <div className="meal-content">
            <div className="meal-tags">
              {/* <span className="tag tag--vegan">Vegan</span> */}
              <span className="tag tag--paleo">Italian</span>
            </div>
            <p className="meal-title">Lasagna</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>400 calories</span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="diets">
          <h3 className="heading-tertiary">Countries Represented:</h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Italian</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Japanese</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Indian</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Mexican</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Middle Eastern</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Thai</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Vietnamese</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Chinese</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>and more! </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container all-recipes">
        <a href="#" className="link">
          See all menus &rarr;
        </a>
      </div>
    </section>
  );
}
