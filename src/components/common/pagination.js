import React from 'react';
import PropTypes from 'prop-types';
import GatsbySimplePagination from './gatsby-simple-pagination/gsp';

const Pagination = ({ pageCount }) => {
  return (
    <GatsbySimplePagination
      totalPages={pageCount}
      containerClassName="pagination"
      listClassName="pagination-list"
      listItemClassName="pagination-list__item"
      listLinkClassName="pagination-list__link"
      listLinkActiveClassName="pagination-list__link--active"
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
};

export default Pagination;
