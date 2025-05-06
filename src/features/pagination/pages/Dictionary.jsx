import React, { useState } from "react";

const Dictionary = () => {
  const [definition, setDefinition] = useState("");
  const [input, setInput] = useState("");

  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const handleSearch = () => {
    const result = dict.find(
      (item) => item.word.toLowerCase() == input.toLowerCase()
    );
    console.log(result, input);
    setDefinition(result?.meaning || "Word not found in the dictionary.");
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="search" onClick={handleSearch}>
        Search
      </button>
      <h3>Definition:</h3> <p>{definition}</p>
    </div>
  );
};

export default Dictionary;
