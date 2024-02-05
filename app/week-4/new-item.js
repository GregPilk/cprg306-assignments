"use client";
import { useState } from "react";

export default function NewItem({ onAdd }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit (event) {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log("New Item: ", item);
        alert("Added ${quantity} ${name} from ${category} to the list.");
        onAdd({name, quantity, category});
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl">Add New Item</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen</option>
                    <option value="pantry">Pantry</option>
                </select>
            </div>
            <button type="submit">Add</button>
        </form>
    );
}