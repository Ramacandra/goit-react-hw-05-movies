import React from 'react';
import './search.css';

function Search({ query }) {
  return (
    <div className="search-form">
      <form onSubmit={query}>
        <input
          className="form input"
          type="text"
          name="query"
          placeholder="RIPD..."
        />
        <button className="form submit-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
