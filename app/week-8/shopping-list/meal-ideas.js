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
          className="p-2 m-4 bg-slate-800 max-w-sm border-2 border-slate-800 hover:border-orange-400 hover:border-2"
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
    <div>
      <h2>Meal Ideas</h2>
      <div>
        <div className="">
          <ul>{checkForMeals()}</ul>
          {/* {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-slate-800 p-2 my-2 rounded-lg hover:bg-orange-800 cursor-pointer transition duration-300 ease-in-out"
            >
              <p className="text-lg font-bold">{meal.strMeal}</p>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
