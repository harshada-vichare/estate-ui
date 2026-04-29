import React, { useState } from "react";
import "./searchbar.scss";

const types = ["buy", "rent"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="#">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          min={0}
          max={100000}
          name="min-price"
          placeholder="Min Price"
        />
        <input
          type="number"
          min={0}
          max={100000}
          name="max-price"
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
}
