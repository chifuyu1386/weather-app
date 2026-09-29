import { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cityName = inputValue.trim();

    if (!cityName) {
      return;
    }

    onSearch(cityName);
    setInputValue("");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search for a city..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;