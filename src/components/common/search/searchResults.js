import React from 'react';
import { Link } from 'gatsby';
import searchResultsType from '../../../types/components/common/search/searchResultsType';

const SearchResults = ({ searchTerm, showMore = true, results }) => {
  return (
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

      {showMore && (
        <Link
          to={`/blog/search?keywords=${searchTerm}`}
          className="blog-sidebar-search-results__cta"
        >
          see more results
        </Link>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  ...searchResultsType,
};

export default SearchResults;
