"use client";
import { useState } from "react";
import items from "./items.json";
import Item from "./item";

export default function ItemList() {
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
  const renderGroupedItems = () => {
    const groupedItems = sortedItems.reduce((acc, item) => {
      const category = item.category;
      acc[category] = [...(acc[category] || []), item];
      return acc;
    }, {});

    return Object.entries(groupedItems).map(([category, itemsInCategory]) => (
      <div key={category}>
        <h2 className="text-lg font-bold mb-2 capitalize px-4">{category}</h2>
        {itemsInCategory.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    ));
  };
  return (
    <div>
      <div>
        <button
          className={sortby === "name" ? "bg-slate-800 p-1 m-3 text-xl" : ""}
          onClick={() => setSortby("name")}
        >
          Name
        </button>
        <button
          className={
            sortby === "category" ? "bg-slate-800 p-1 m-3 text-xl" : ""
          }
          onClick={() => setSortby("category")}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item} {...item} />
        ))}
      </ul>
    </div>
  );
}
