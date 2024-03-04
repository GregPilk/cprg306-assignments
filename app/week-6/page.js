"use client";
// import Counter from "./counter.js";
// import DogForm from "./dog-form.js";
// import DogList from "./dog-list.js";
// import dogData from "./dog-data.json";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-slate-950">
      <h1 className="text-4xl font-bold">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

// export default function Page() {
//   const [dogs, setDogs] = useState(dogData);

//   const addDog = (dog) => {
//     setDogs([...dogs, dog]);
//   };

//   const deleteDog = (id) => {
//     setDogs(dogs.filter((dog) => dog.id !== id));
//   };

//   return (
//     // <main className="flex bg-slate-950 m-2 justify-center w-full">
//     //   <Counter />
//     <div>
//       <main className="bg-slate-950 m-2 justify-center w-full">
//         <h2>Week 6</h2>
//         <h2>Manage Dogs</h2>
//         <DogList dogs={dogs} onDelete={deleteDog} />
//         <DogForm onAddDog={addDog} />
//       </main>
//     </div>
//   );
// }
