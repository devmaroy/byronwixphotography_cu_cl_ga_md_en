import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BlogSidebarCategories = ({ heading, categories }) => {
  return (
    <div className="blog-sidebar-categories">
      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <ul className="blog-sidebar-categories__list">
        {categories.map(({ id, name, slug }) => (
          <li key={id} className="blog-sidebar-categories__item">
            <Link
              to={`/blog/category/${slug}`}
              className="blog-sidebar-categories__link"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

BlogSidebarCategories.propTypes = {
  heading: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BlogSidebarCategories;
