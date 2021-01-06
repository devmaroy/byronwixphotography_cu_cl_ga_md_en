import React from 'react';
import paginationType from '../../types/components/common/paginationType';
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
  ...paginationType,
};

export default Pagination;
