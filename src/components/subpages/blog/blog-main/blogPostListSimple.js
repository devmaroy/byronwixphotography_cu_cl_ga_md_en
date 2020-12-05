import React from 'react';
import PropTypes from 'prop-types';

const BlogPostListSimple = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <div>{item.excerpt}</div>
        </div>
      ))}
    </div>
  );
};

BlogPostListSimple.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default BlogPostListSimple;
