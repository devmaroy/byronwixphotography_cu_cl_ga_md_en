import React from 'react';
import PropTypes from 'prop-types';
import BlogPostHeader from './blogPostHeader';
import BlogPostContent from './blogPostContent';
import BlogPostMeta from './blogPostMeta';
import BlogPostComments from './blogPostComments';

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data;

  return (
    <article className="blog-article">
      <BlogPostHeader
        categories={frontmatter.categories}
        date={frontmatter.date}
        formattedDate={frontmatter.formattedDate}
        title={frontmatter.title}
        featuredImage={frontmatter.featuredImage.childImageSharp}
      />

      <BlogPostContent content={html} />

      <BlogPostMeta tags={frontmatter.tags} />

      <BlogPostComments />
    </article>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.shape({
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      formattedDate: PropTypes.string.isRequired,
      featuredImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            aspectRatio: PropTypes.number.isRequired,
            base64: PropTypes.string.isRequired,
            sizes: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;
