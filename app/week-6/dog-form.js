"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = Math.floor(Math.random() * 1000000);
    const newDog = { id: newId, name, age };
    onAddDog(newDog);
  };
  return (
    <div className="border-2 border-gray-600 rounded-sm bg-slate-700 w-60">
      <h2>Add Dog</h2>
      <form className="flex-col justify-center" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="text-black"
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="text-black"
          />
        </label>
        <button
          className="border-1 rounded-sm border-gray-600 bg-gray-500 hover:bg-blue-400 p-1 m-2 w-20"
          type="submit"
        >
          Add Dog
        </button>
      </form>
    </div>
  );
}
