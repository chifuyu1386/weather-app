function SearchBar() {
  return (
    <form className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">⌕</span>

        <input type="text"
          placeholder="Search for a city..."
          />
      </div>

      <button type="submit">
        Search
      </button>
    </form>
  )
}


export default SearchBar;