"use client";
import { useState } from "react";

export default function NewItem({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log("New Item: ", item);
    alert(`Added ${quantity} ${name} from ${category} to the list.`);
    onAdd({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("produce");
  }
  return (
    <div className="border-2 border-double border-gray-600 rounded-md p-3 bg-slate-800 w-80">
      <form onSubmit={handleSubmit}>
        <h2 className="flex justify-center text-2xl">Add New Item</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            placeholder="0"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            placeholder="Category"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen</option>
            <option value="pantry">Pantry</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className="border-1 rounded-sm border-gray-600 bg-gray-500 hover:bg-blue-400 p-1 m-2 w-20"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
