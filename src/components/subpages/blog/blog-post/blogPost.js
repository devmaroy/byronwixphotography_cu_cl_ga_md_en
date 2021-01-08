/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import blogPostType, {
  blogPostNavigationType,
} from '../../../../types/blog/blogPostType';
import BlogPostHeader from './blogPostHeader';
import BlogPostContent from './blogPostContent';
import BlogPostMeta from './blogPostMeta';
import BlogPostComments from './blogPostComments';

const BlogPost = ({ data, prev, next }) => {
  const { frontmatter, html } = data;

  return (
    <article className="blog-post">
      <BlogPostHeader
        categories={frontmatter.categories}
        date={frontmatter.date}
        formattedDate={frontmatter.formattedDate}
        title={frontmatter.title}
        featuredImage={frontmatter.featuredImage.childImageSharp}
      />

      <div className="blog-post-container">
        <BlogPostContent content={html} />

        <BlogPostMeta tags={frontmatter.tags} prev={prev} next={next} />

        <BlogPostComments
          identifier={frontmatter.slug}
          title={frontmatter.title}
        />
      </div>
    </article>
  );
};

BlogPost.propTypes = {
  prev: blogPostNavigationType,
  next: blogPostNavigationType,
  data: PropTypes.shape(blogPostType).isRequired,
};

export default BlogPost;
