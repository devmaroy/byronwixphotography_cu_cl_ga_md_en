import React from 'react';
import PropTypes from 'prop-types';
import blogPostType from '../../../../types/blog/blogPostType';
import BlogPostHeader from './blogPostHeader';
import BlogPostContent from './blogPostContent';
import BlogPostMeta from './blogPostMeta';
import BlogPostComments from './blogPostComments';

const BlogPost = ({ data }) => {
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

        <BlogPostMeta tags={frontmatter.tags} />

        <BlogPostComments
          identifier={frontmatter.slug}
          title={frontmatter.title}
        />
      </div>
    </article>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape(blogPostType).isRequired,
};

export default BlogPost;
