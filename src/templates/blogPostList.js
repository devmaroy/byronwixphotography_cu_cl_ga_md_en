import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import BlogSidebar from '../components/subpages/blog/blog-sidebar/blogSidebar';

// TODO: Categories key change to slug

/* categories={post.frontmatter.categories.map((category) => {
   return {
     name: category,
     slug: category.replace(/ /g, '-').toLowerCase(),
   };
})} */

const BlogPostListTemplate = ({ data }) => {
  const blogPosts = data.blogPosts.nodes;

  return (
    <Layout>
      <SEO
        title="Blog"
        description=" Lemon drops fruitcake gummi bears chupa chups carrot cake wafer. Topping macaroon pastry donut. Lollipop pastry bear claw."
      />

      <section className="subpage blog">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading="Blog">
              <p>
                Lemon drops fruitcake gummi bears chupa chups carrot cake wafer.
                Topping macaroon pastry donut. Lollipop pastry bear claw.
              </p>
            </SubpageHeader>
          </div>

          <div className="blog-list">
            {blogPosts.map(
              ({
                frontmatter: {
                  id,
                  title,
                  slug,
                  date,
                  formattedDate,
                  featuredImage,
                  categories,
                },
                html,
              }) => (
                <div key={id} className="blog-list-item">
                  <div className="blog-list-item__image-wrapper">
                    <Img
                      fluid={featuredImage.childImageSharp.fluid}
                      className="blog-list-item__image"
                    />
                  </div>

                  <ul className="blog-list-item-categories">
                    {categories.map(
                      ({
                        id: categoryId,
                        name: categoryName,
                        slug: categorySlug,
                      }) => (
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
                    written on the <time dateTime={date}>{formattedDate}</time>
                  </span>

                  <h2 className="blog-list-item__title">
                    <Link
                      to={`/blog/${slug}`}
                      className="blog-list-item__title-link"
                    >
                      {title}
                    </Link>
                  </h2>

                  <div
                    className="blog-list-item__content"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              ),
            )}
          </div>

          <div className="pagination">
            <ul className="pagination-list">
              <li className="pagination-list__item">
                <Link
                  to="/"
                  className="pagination-list__link pagination-list__link--active"
                >
                  1
                </Link>
              </li>

              <li className="pagination-list__item">
                <Link to="/" className="pagination-list__link">
                  2
                </Link>
              </li>

              <li className="pagination-list__item">
                <Link to="/" className="pagination-list__link">
                  3
                </Link>
              </li>

              <li className="pagination-list__item">...</li>

              <li className="pagination-list__item">
                <Link to="/" className="pagination-list__link">
                  9
                </Link>
              </li>
            </ul>
          </div>

          <BlogSidebar />
        </div>
      </section>
    </Layout>
  );
};

// eslint-disable-next-line no-undef
export const BlogPostListQuery = graphql`
  query BlogPosts {
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          id
          title
          slug
          formattedDate: date(formatString: "MMMM D, YYYY")
          date
          categories {
            id
            name
            slug
          }
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
`;

BlogPostListTemplate.propTypes = {
  data: PropTypes.shape({
    blogPosts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
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
            categories: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
              }).isRequired,
            ).isRequired,
          }).isRequired,
          html: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostListTemplate;
