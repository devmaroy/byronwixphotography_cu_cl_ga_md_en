/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';

const BlogPostComments = ({ identifier, title }) => {
  return (
    <div className="blog-post-comments">
      <h3 className="blog-post-comments__heading">Leave a comment</h3>

      <DiscussionEmbed
        shortname={process.env.DISQUS_SHORTNAME}
        config={{
          identifier,
          title,
        }}
      />
    </div>
  );
};

BlogPostComments.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogPostComments;
