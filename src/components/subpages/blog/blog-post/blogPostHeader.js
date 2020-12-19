/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const BlogPostHeader = ({
  categories,
  date,
  formattedDate,
  title,
  featuredImage,
}) => {
  return (
    <header className="blog-article-header">
      <ul className="blog-article-header-categories">
        {categories.map(({ id, slug, name }) => (
          <li key={id} className="blog-article-header-categories__item">
            <Link
              to={`/blog/${slug}`}
              className="blog-article-header-categories__link"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <time dateTime={date} className="blog-article-header__date">
        written on the {formattedDate}
      </time>

      <h1
        className="blog-article-header__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div className="blog-article-header-image">
        <Img
          fluid={featuredImage.fluid}
          className="blog-article-header-image__img"
        />
      </div>
    </header>
  );
};

BlogPostHeader.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  date: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number.isRequired,
      base64: PropTypes.string.isRequired,
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostHeader;
