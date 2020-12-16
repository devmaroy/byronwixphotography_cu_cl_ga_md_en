/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import SearchResults from './searchResults';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const limit = 6;

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const limitResults = (resultsToLimit) => {
    return resultsToLimit.slice(0, limit);
  };

  const delayedSearchForItems = useMemo(
    () =>
      debounce((currentSearchTerm) => {
        // Check if Lunr exists and if we have query to search for
        if (!window.__LUNR__ || !currentSearchTerm) {
          setResults([]);
          return;
        }

        // Look for results
        window.__LUNR__.__loaded.then((lunr) => {
          // Lunr is loaded at this point - get refs
          const refs = lunr.en.index.search(currentSearchTerm);

          // Get the data based on the refs
          const lunrData = refs.map(({ ref }) => lunr.en.store[ref]);

          // Limit data
          const limitedData = limitResults(lunrData);

          // Update state with the data
          setResults(limitedData);
        });
      }, 600),
    [],
  );

  useEffect(() => {
    delayedSearchForItems(searchTerm);
  }, [searchTerm, delayedSearchForItems]);

  return (
    <>
      <form
        className="form blog-sidebar-search-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          className="form__control blog-sidebar-search-form__input"
          onChange={handleChange}
        />

        {searchTerm !== '' && results.length !== 0 && (
          <SearchResults
            searchTerm={searchTerm}
            showMore={results.length >= limit}
            results={results}
          />
        )}
      </form>
    </>
  );
};

export default SearchForm;
