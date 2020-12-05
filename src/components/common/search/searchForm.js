/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    // Check if LUNR exist and if we have some query to search for

    if (!window.__LUNR__ && !searchTerm) {
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
      setResults(posts);
    });
  }, [searchTerm]);

  return (
    <div>
      <form className="form blog-sidebar-search-form">
        <input
          type="search"
          className="form__control blog-sidebar-search-form__input"
          onChange={handleChange}
        />
      </form>

      {searchTerm !== '' && results.length !== 0 && (
        <div className="blog-sidebar-search-results">
          <h4 className="blog-sidebar-search-results__heading">
            Results ({results.length})
          </h4>

          <ul className="blog-sidebar-search-results-list">
            {results.map(({ id, title, slug }) => (
              <li key={id} className="blog-sidebar-search-results-list__item">
                <Link
                  to={`/blog/${slug}`}
                  className="blog-sidebar-search-results-list__link"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to={`/blog/search?keywords=${searchTerm}`}
            className="blog-sidebar-search-results__cta"
          >
            see more results
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
