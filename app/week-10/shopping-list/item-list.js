"use client";

import Item from "./item.js";
import { useState, useEffect } from "react";

export default function ItemList({ items = [], onSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items
    .map((item) => {
      const actualItem = item.name ? item : item.item; // Adjust this line based on your actual data structure
      return {
        ...actualItem,
        name: String(actualItem.name),
        category: String(actualItem.category),
      };
    })
    .sort((a, b) => {
      try {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        } else if (sortBy === "groupedCategory") {
          return a.category.localeCompare(b.category);
        }
      } catch (error) {
        console.error("Error sorting items:", a, b);
        throw error;
      }
    });

  const handleGroupedItems = () => {
    const groupedItems = sortedItems.reduce((acc, item) => {
      const category = item.category;
      acc[category] = [...(acc[category] || []), item];
      return acc;
    }, {});
    return Object.entries(groupedItems).map(([category, itemsInCategory]) => (
      <div key={category}>
        <h2 className="text-lg font-bold mb-2 capitalize px-4">{category}</h2>
        {itemsInCategory.map((item) => (
          <Item key={item.id} {...item} onSelect={onSelect} />
        ))}
      </div>
    ));
  };

  return (
    <div className="bg-slate-950 border-0 rounded-3xl p-3">
      <div className="flex justify-center pl-2">
        <button
          className={`${
            sortBy === "name"
              ? "hover:bg-green-800 p-1 m-3 text-xl"
              : "bg-slate-600 hover:bg-green-800"
          } text-white font-bold py-2 px-4 rounded m-2`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`${
            sortBy === "category"
              ? "hover:bg-green-800  p-1 m-3 text-xl"
              : "bg-slate-600 hover:bg-green-800"
          } text-white font-bold py-2 px-4 rounded m-2`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`${
            sortBy === "groupedCategory"
              ? "hover:bg-green-800  p-1 m-3 text-xl"
              : "bg-slate-600 hover:bg-green-800"
          } text-white font-bold py-2 px-4 rounded m-2`}
          onClick={() => setSortBy("groupedCategory")}
        >
          Sort by Grouped Category
        </button>
      </div>

      <div className="">
        {sortBy === "groupedCategory"
          ? handleGroupedItems()
          : sortedItems.map((item) => (
              <Item key={item.id} {...item} onSelect={onSelect} />
            ))}
      </div>
    </div>
  );
}
