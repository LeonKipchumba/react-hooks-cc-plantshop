import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <label>Search Plants:</label>
      <input
        type="text"
        placeholder="Type a name to search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;