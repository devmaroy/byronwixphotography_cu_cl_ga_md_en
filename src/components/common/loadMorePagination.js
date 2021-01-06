/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import loadMorePaginationType from '../../types/components/common/loadMorePaginationType';

const LoadMorePagination = ({ perPage, items, children, onReset }) => {
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
      {children(getPaginatedItems())}

      <div className="load-more-pagination">
        {!isAllLoaded && hasItemsToPaginate() && (
          <button
            className="button button--outline-primary load-more-pagination__button"
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

LoadMorePagination.propTypes = {
  ...loadMorePaginationType,
};

export default LoadMorePagination;
