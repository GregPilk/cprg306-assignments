"use client";

import { useState, useEffect } from "react";
import Meal from "./meal.js";

// useEffect(() => {
//   async function fetchMealIdeas() {
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
//     );
//     const data = await response.json();
//     setMeals(data.meals);
//   }
//   fetchMealIdeas();
// }, [ingredient]);

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();

  return Object.keys(data.message);
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <Meal
              id={meal.idMeal}
              name={meal.strMeal}
              mealURL={meal.strMealThumb}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
