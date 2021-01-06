/* eslint-disable react/no-danger */
import React from 'react';
import blogPostContentType from '../../../../types/blog/blogPostContentType';

const BlogPostContent = ({ content }) => {
  return (
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

BlogPostContent.propTypes = {
  ...blogPostContentType,
};

export default BlogPostContent;
