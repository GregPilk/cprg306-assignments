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
        if (sortby ==='category'){
            return a.category.localeCompare(b.category);
        }
        if (sortby === 'groupedCategory'){
            return a.category.localeCompare(b.category);
        }
        return a - b;
    });
    return(
        <div>
            <div>
                <button className= {sortby === "name" ? "bg-slate-800" : ""} onClick={() => setSortby("name")}>Name</button>
            </div>
            <ul>
                {sortedItems.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ul>
        </div>
    )
}

