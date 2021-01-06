/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import blogPostHeaderType from '../../../../types/blog/blogPostHeaderType';

const BlogPostHeader = ({
  categories,
  date,
  formattedDate,
  title,
  featuredImage,
}) => {
  return (
    <header className="blog-post-header">
      <ul className="blog-post-header-categories">
        {categories.map(({ id, slug, name }) => (
          <li key={id} className="blog-post-header-categories__item">
            <Link
              to={`/blog/${slug}`}
              className="blog-post-header-categories__link"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <time dateTime={date} className="blog-post-header__date">
        written on the {formattedDate}
      </time>

      <h1
        className="blog-post-header__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div className="blog-post-header-image">
        <Img
          fluid={featuredImage.fluid}
          className="blog-post-header-image__img"
        />
      </div>
    </header>
  );
};

BlogPostHeader.propTypes = {
  ...blogPostHeaderType,
};

export default BlogPostHeader;
