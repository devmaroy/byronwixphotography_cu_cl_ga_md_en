import React from 'react';
import PropTypes from 'prop-types';
import GatsbySimplePagination from './gatsby-simple-pagination/gsp';

const Pagination = ({ pageCount, prefix = 'blog' }) => {
  return (
    <GatsbySimplePagination
      totalPages={pageCount}
      prefix={prefix}
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
  prefix: PropTypes.string,
};

export default Pagination;
