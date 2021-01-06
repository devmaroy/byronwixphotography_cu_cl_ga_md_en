import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import blogPostListSimpleType from '../../../types/blog/blogPostListSimpleType';

const BlogPostListSimple = ({ posts }) => {
  return (
    <div className="blog-list-simple">
      {posts.map(
        ({ id, title, slug, excerpt, categories, date, formattedDate }) => (
          <div key={id} className="blog-list-item blog-list-simple-item">
            <h2 className="blog-list-item__title blog-list-simple-item__title">
              <Link
                to={`/blog/${slug}`}
                className="blog-list-item__title-link blog-list-simple-item__title-link"
              >
                {title}
              </Link>
            </h2>

            <div className="blog-list-item__meta blog-list-simple-item__meta">
              <ul className="blog-list-item-categories blog-list-simple-item-categories">
                {categories.map(
                  ({
                    id: categoryId,
                    name: categoryName,
                    slug: categorySlug,
                  }) => (
                    <li
                      key={categoryId}
                      className="blog-list-item-categories__item blog-list-simple-item-categories__item"
                    >
                      <Link
                        to={`/blog/category/${categorySlug}`}
                        className="blog-list-item-categories__link blog-list-simple-item-categories__link"
                      >
                        {categoryName}
                      </Link>
                    </li>
                  ),
                )}
              </ul>

              <span className="blog-list-item__date blog-list-simple-item__date">
                written on the <time dateTime={date}>{formattedDate}</time>
              </span>
            </div>

            <div className="blog-list-item__content blog-list-simple-item__content">
              <p>{excerpt}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

BlogPostListSimple.propTypes = {
  posts: PropTypes.arrayOf(blogPostListSimpleType).isRequired,
};

export default BlogPostListSimple;
