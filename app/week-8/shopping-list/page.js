"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItem] = useState("");

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

// const getRandomDog = async () => {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   const data = await response.json();
//   return data.message;
// };
// const getDogBreeds = async () => {
//   const response = await fetch("https://dog.ceo/api/breeds/list/all");
//   const data = await response.json();
//   return Object.keys(data.message);
// };

// const getBreedImage = async (breed) => {
//   const response = await fetch(
//     `https://dog.ceo/api/breed/${breed}/images/random`
//   );
//   const data = await response.json();
//   return data.message;
// };

// export default function Page() {
//   const [dogUrl, setDogUrl] = useState(null);
//   const [breeds, setBreeds] = useState([]);
//   const [selectedBreed, setSelectedBreed] = useState(null);

//   const loadRandomDog = async () => {
//     const url = await getRandomDog();
//     setDogUrl(url);
//   };

//   const loadBreeds = async () => {
//     const breeds = await getDogBreeds();
//     setBreeds(breeds);
//   };

//   const loadBreedImage = async (breed) => {
//     const breedImage = await getBreedImage(breed);
//     setDogUrl(breedImage);
//   };

//   useEffect(() => {
//     loadRandomDog();
//     loadBreeds();
//   }, []);
//   // setDogUrl(await getRandomDog());
//   // infinite loop because it calls every time the component renders
//   //   const dogUrl = await getRandomDog();
//   // doesn't work because it calls every time the component renders and it can't be an async function

//   useEffect(() => {
//     loadBreedImage(selectedBreed);
//   }, [selectedBreed]);
//   return (
//     <main>
//       <h1>Week 7</h1>
//       <p> Random Dog</p>
//       <img src={dogUrl} alt="Random Dog" />
//       <select
//         className="text-black"
//         value={selectedBreed}
//         onChange={(e) => setSelectedBreed(e.target.value)}
//       >
//         {breeds.map((breed) => (
//           <option value={breed}>{breed}</option>
//         ))}
//       </select>
//     </main>
//   );
// }
