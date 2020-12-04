import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const BlogMainPostList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map(({ childMarkdownRemark: { frontmatter, html } }) => (
        <div key={frontmatter.id} className="blog-list-item">
          <div className="blog-list-item__image-wrapper">
            <Link to={`/blog/${frontmatter.slug}`}>
              <Img
                fluid={frontmatter.featuredImage.childImageSharp.fluid}
                className="blog-list-item__image"
              />
            </Link>
          </div>

          <ul className="blog-list-item-categories">
            {frontmatter.categories.map(
              ({ id: categoryId, name: categoryName, slug: categorySlug }) => (
                <li
                  key={categoryId}
                  className="blog-list-item-categories__item"
                >
                  <Link
                    to={`/blog/category/${categorySlug}`}
                    className="blog-list-item-categories__link"
                  >
                    {categoryName}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <span className="blog-list-item__date">
            written on the{' '}
            <time dateTime={frontmatter.date}>{frontmatter.formattedDate}</time>
          </span>

          <h2 className="blog-list-item__title">
            <Link
              to={`/blog/${frontmatter.slug}`}
              className="blog-list-item__title-link"
            >
              {frontmatter.title}
            </Link>
          </h2>

          <div
            className="blog-list-item__content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      ))}
    </div>
  );
};

BlogMainPostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        frontmatter: PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          categories: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }).isRequired,
          ).isRequired,
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
        }).isRequired,
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default BlogMainPostList;
