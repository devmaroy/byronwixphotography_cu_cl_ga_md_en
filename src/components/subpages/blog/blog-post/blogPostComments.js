/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import blogPostCommentsType from '../../../../types/blog/blogPostCommentsType';

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
  ...blogPostCommentsType,
};

export default BlogPostComments;
