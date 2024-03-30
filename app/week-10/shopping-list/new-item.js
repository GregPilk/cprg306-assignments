"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const newId = Math.floor(Math.random() * 1000000);
    const item = { id: newId, name, quantity, category };
    console.log("New Item: ", item);

    onAddItem({ item });
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div className="border-0 rounded-2xl p-3 text-white bg-slate-950 w-80">
      <form onSubmit={handleSubmit}>
        <h2 className="flex justify-center border-0 rounded-sm bg-slate-900 text-2xl p-2 mb-2">
          Add New Item
        </h2>
        <div className="flex-col place-content-center">
          <div>
            <label htmlFor="name" className="text-xl">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mb-2 mt-2 w-60 border-1 text-black border-gray-600 rounded-sm p-1"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="text-xl">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              placeholder="0"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="mb-2 mt-2 w-60 border-1 text-black border-gray-600 rounded-sm p-1"
            />
          </div>
          <div>
            <label htmlFor="category" className="text-xl">
              Category:
            </label>
            <select
              id="category"
              value={category}
              placeholder="Category"
              onChange={(event) => setCategory(event.target.value)}
              className="mb-2 mt-2 w-60 text-black border-1 border-gray-600 rounded-sm p-1"
            >
              <option value="default" disabled>
                Select a category
              </option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozenFoods">Frozen Foods</option>
              <option value="cannedGoods">Canned Goods</option>
              <option value="dryGoods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="border-1 rounded-sm border-gray-600 bg-gray-500 hover:bg-blue-400 p-1 m-2 w-20"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
