import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import blogPostListType from '../../../types/blog/blogPostListType';

const BlogPostList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map(({ childMarkdownRemark: { frontmatter } }) => (
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
            className="blog-list-item__teaser"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: frontmatter.teaser }}
          />
        </div>
      ))}
    </div>
  );
};

BlogPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(blogPostListType).isRequired)
    .isRequired,
};

export default BlogPostList;
