"use client";

import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    // increment by one even if the line is called twice
    //setCount(count + 1);

    //increment by two
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="border-2 border-double border-gray-600 rounded-md p-3 text-white bg-slate-800 w-80">
      <div className="flex-col">
        <h2 className="text-2xl text-center">Counter</h2>
        <p>Count: {count} </p>
        <button
          className="border-1 rounded-sm border-gray-600 bg-gray-500 hover:bg-blue-400 p-1 m-2 w-20"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
