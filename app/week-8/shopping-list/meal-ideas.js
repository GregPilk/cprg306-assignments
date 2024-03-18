"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();

  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };
  function checkForMeals() {
    if (meals === null || ingredient === "") {
      return <li>Select Ingredient to see meal ideas!</li>;
    } else {
      return meals.map((meal) => (
        <li
          key={meal.idMeal}
          className="p-2 bg-slate-600 max-w-sm border-2 border-slate-800 hover:border-green-800 hover:border-2"
        >
          <p>{meal.strMeal}</p>
        </li>
      ));
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-slate-950 overflow-y-scroll max-h-72">
      <h2 className="text-center border-0 rounded-sm bg-slate-900 text-2xl p-2 mb-2 sticky top-0 z-10">
        Meal Ideas
      </h2>
      <div className="border-0 rounded-2xl p-3 text-white bg-slate-950">
        <ul>{checkForMeals()}</ul>
      </div>
    </div>
  );
}
