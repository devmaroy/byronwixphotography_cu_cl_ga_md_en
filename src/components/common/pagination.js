/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PaginationList = ({ items }) => items;

const Pagination = ({ perPage, items, children, onReset }) => {
  const [page, setPage] = useState(1);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  const paginateItems = (itemsToPaginate) => {
    return itemsToPaginate.slice(0, page * perPage);
  };

  const getPaginatedItems = () => {
    return paginateItems(items);
  };

  const hasItemsToPaginate = () => {
    return items.length > perPage;
  };

  const loadMoreItems = () => {
    const totalPages = Math.ceil(items.length / perPage);

    setPage((currentPage) => currentPage + 1);
    setIsAllLoaded(totalPages === page + 1);
  };

  const reset = () => {
    setPage(1);
    setIsAllLoaded(false);
  };

  useEffect(() => {
    if (onReset) {
      onReset(reset);
    }
  }, [onReset]);

  return (
    <>
      <PaginationList items={children(getPaginatedItems())} />

      <div className="pagination">
        {!isAllLoaded && hasItemsToPaginate() && (
          <button
            className="button button--outline-primary pagination__button"
            type="button"
            onClick={loadMoreItems}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
  onReset: PropTypes.func,
};

export default Pagination;
