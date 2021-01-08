// Gatsby Simple Pagination (GSP)
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import paginationAlgorithm from './gspAlgorithm';
import './style.css';

const GatsbySimplePagination = ({
  totalPages,
  prefix = 'blog',
  containerClassName = 'gsp',
  listClassName = 'gsp-list',
  listItemClassName = 'gsp-list__item',
  listLinkClassName = 'gsp-list__link',
  listLinkActiveClassName = 'gsp-list__link--active',
}) => {
  const initialPage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      parseInt(window.localStorage.getItem('gspCurrentPage'), 10) || 1;
    }
  }

  const [currentPage, setCurrentPagePage] = useState(initialPage);

  useEffect(() => {
    localStorage.setItem('gspCurrentPage', currentPage);

    return () => {
      localStorage.removeItem('gspCurrentPage');
    };
  }, [currentPage]);

  const changeCurrentPage = (page) => {
    setCurrentPagePage(page);
  };

  const hasItemsToPaginate = () => {
    return (
      totalPages && paginationAlgorithm(currentPage, totalPages).length > 1
    );
  };

  const getPagination = () => {
    return paginationAlgorithm(currentPage, totalPages);
  };

  if (!totalPages) {
    return <p>Please provide items to paginate.</p>;
  }

  return (
    <div className={containerClassName}>
      <ul className={listClassName}>
        {hasItemsToPaginate() &&
          getPagination().map((page, i) => (
            <li key={i} className={listItemClassName}>
              {page === '...' ? (
                page
              ) : (
                <Link
                  to={page === 1 ? `/${prefix}` : `/${prefix}/${page}`}
                  className={listLinkClassName}
                  activeClassName={listLinkActiveClassName}
                  onClick={() => changeCurrentPage(page)}
                >
                  {page}
                </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

GatsbySimplePagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  containerClassName: PropTypes.string,
  listClassName: PropTypes.string,
  listItemClassName: PropTypes.string,
  listLinkClassName: PropTypes.string,
  listLinkActiveClassName: PropTypes.string,
};

export default GatsbySimplePagination;
