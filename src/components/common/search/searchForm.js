/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import SearchResults from './searchResults';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const limit = 6;

  const delayedSearch = debounce((term) => {
    setSearchTerm(term);
  }, 600);

  const handleChange = (e) => {
    const { value } = e.target;
    delayedSearch(value);
  };

  const limitResults = (resultsToLimit) => {
    return resultsToLimit.slice(0, limit);
  };

  useEffect(() => {
    // Check if LUNR exist and if we have some query to search for

    if (!window.__LUNR__ || !searchTerm) {
      setResults([]);
      return;
    }

    // Load results
    window.__LUNR__.__loaded.then((lunr) => {
      // Lunr is loaded here - get refs
      const refs = lunr.en.index.search(searchTerm);

      // Get posts based on refs
      const posts = refs.map(({ ref }) => lunr.en.store[ref]);

      // Set results to state
      setResults(limitResults(posts));
    });
  }, [searchTerm]);

  return (
    <>
      <form className="form blog-sidebar-search-form">
        <input
          type="search"
          className="form__control blog-sidebar-search-form__input"
          onChange={handleChange}
        />
      </form>

      {searchTerm !== '' && results.length !== 0 && (
        <SearchResults
          searchTerm={searchTerm}
          showMore={results.length <= limit}
          results={results}
        />
      )}
    </>
  );
};

export default SearchForm;
