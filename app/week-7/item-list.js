"use client";

import { useState } from "react";
import Item from "./items";

export default function ItemList({ items, onItemSelect }) {
  const [sortby, setSortby] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortby === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortby === "category") {
      return a.category.localeCompare(b.category);
    }
    // if (sortby === "groupedCategory") {
    //   return a.category.localeCompare(b.category);
    // }
    return a.quantity - b.quantity;
  });

  return (
    <div>
      <div className="bg-slate-800 p-1 ml-2 text-xl w-48">
        <button
          className={
            sortby === "name" ? "hover:bg-slate-600 p-1 m-3 text-xl" : ""
          }
          onClick={() => setSortby("name")}
        >
          Name
        </button>
        <button
          className={
            sortby === "category" ? "hover:bg-slate-600 p-1 m-3 text-xl" : ""
          }
          onClick={() => setSortby("category")}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
