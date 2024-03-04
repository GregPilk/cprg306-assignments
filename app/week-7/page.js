"use client";

import { useState, useEffect } from "react";

const getRandomDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};
const getDogBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message);
};

const getBreedImage = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await response.json();
  return data.message;
};

export default function Page() {
  const [dogUrl, setDogUrl] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const loadRandomDog = async () => {
    const url = await getRandomDog();
    setDogUrl(url);
  };

  const loadBreeds = async () => {
    const breeds = await getDogBreeds();
    setBreeds(breeds);
  };

  const loadBreedImage = async (breed) => {
    const breedImage = await getBreedImage(breed);
    setDogUrl(breedImage);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []);
  // setDogUrl(await getRandomDog());
  // infinite loop because it calls every time the component renders
  //   const dogUrl = await getRandomDog();
  // doesn't work because it calls every time the component renders and it can't be an async function

  useEffect(() => {
    loadBreedImage(selectedBreed);
  }, [selectedBreed]);
  return (
    <main>
      <h1>Week 7</h1>
      <p> Random Dog</p>
      <img src={dogUrl} alt="Random Dog" />
      <select
        className="text-black"
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        {breeds.map((breed) => (
          <option value={breed}>{breed}</option>
        ))}
      </select>
    </main>
  );
}
