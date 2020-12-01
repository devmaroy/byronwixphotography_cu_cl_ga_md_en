import React from 'react';
import PropTypes from 'prop-types';

const BlogSidebarSearch = ({ heading }) => {
  return (
    <div className="blog-sidebar-search">
      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <form className="form blog-sidebar-search-form">
        <input
          type="search"
          className="form__control blog-sidebar-search-form__input"
        />
      </form>
    </div>
  );
};

BlogSidebarSearch.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default BlogSidebarSearch;
