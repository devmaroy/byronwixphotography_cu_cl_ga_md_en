import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BlogSidebarRecentPosts = ({ heading, posts }) => {
  return (
    <div className="blog-sidebar-recent-posts">
      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <ul className="blog-sidebar-recent-posts__list">
        {posts.map(({ id, heading: postHeading, slug: postSlug }) => (
          <li key={id} className="blog-sidebar-recent-posts__item">
            <Link
              to={`/blog/${postSlug}`}
              className="blog-sidebar-recent-posts__link"
            >
              {postHeading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

BlogSidebarRecentPosts.propTypes = {
  heading: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BlogSidebarRecentPosts;
