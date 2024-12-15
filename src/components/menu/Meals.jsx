import { useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
    // {} is recreated everytime Meals function runs -> infinite loop
    // } = useHttp("http://localhost:3000/meals", {}, []);
  } = useHttp(`${import.meta.env.VITE_BACKEND_URL}/meals`, requestConfig, []);

  // State to store the selected filter
  const [filter, setFilter] = useState("all");

  // Filter meals based on the selected type
  const filteredMeals =
    filter === "all"
      ? loadedMeals
      : loadedMeals.filter((meal) => meal.type === filter);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <>
      <div className="meal-filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("western")}
          className={filter === "western" ? "active" : ""}
        >
          Western
        </button>
        <button
          onClick={() => setFilter("eastern")}
          className={filter === "eastern" ? "active" : ""}
        >
          Eastern
        </button>
        <button
          onClick={() => setFilter("dessert")}
          className={filter === "dessert" ? "active" : ""}
        >
          Dessert
        </button>
      </div>

      <ul id="menus">
        {filteredMeals.map((meal) => (
          <MealItem key={meal.id} id={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
}
