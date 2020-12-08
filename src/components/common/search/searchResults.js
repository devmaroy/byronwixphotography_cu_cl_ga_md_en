import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const SearchResults = ({ searchTerm, showMore = true, results }) => {
  console.log(results);

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
  searchTerm: PropTypes.string.isRequired,
  showMore: PropTypes.bool,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      formattedDate: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default SearchResults;
