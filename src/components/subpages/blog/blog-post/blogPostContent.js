/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const BlogPostContent = ({ content }) => {
  return (
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPostContent;
