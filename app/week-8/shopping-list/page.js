"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItem] = useState("");
  const { user, firebaseSignout } = useUserAuth();

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (id) => {
    const selectedIngredient = items.find((ingredient) => ingredient.id === id);
    console.log("selectedIngredient", selectedIngredient);
    const separatedSymbols = selectedIngredient.name.split(",")[0];
    console.log("separatedSymbols", separatedSymbols);
    const cleanedIngredient = separatedSymbols.replace(
      /[\p{Emoji_Presentation}\p{Emoji}\p{Emoji_Modifier_Base}\p{Emoji_Modifier}\p{Emoji_Component}]/gu,
      ""
    );
    console.log("item selected", cleanedIngredient);
    setSelectedItem(cleanedIngredient);
  };

  if (!user) {
    return (
      <div>
        <h3>Hey Look!</h3>
        <p>You haven't logged in yet</p>
        <button onClick={() => (location.href = "week-8")}>
          Get to the login!
        </button>
        <Link href="/week-8">Shopping List</Link>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center m-8">Shopping List</h1>
      <div className="flex justify-center">
        <div className="flex flex-row bg-slate-950 w-9/12">
          <div className="mt-5 mb-6">
            <NewItem onAddItem={handleAddItem} />
            <div className="flex border-2 border-double justify-center align-middle max-h-56 mt-5 overflow-scroll border-gray-600 rounded-md p-3 text-white bg-slate-800 w-80">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
          <div className="flex justify-center ml-12">
            <ItemList items={items} onSelect={handleItemSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}
