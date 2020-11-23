import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';

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

          <div className="blog-sidebar">
            <div className="blog-sidebar-author">
              <div className="blog-sidebar-author__image-wrapper">
                {/* <Img fluid={} /> */}
              </div>

              <h3 className="blog-sidebar__heading">About</h3>

              <div className="blog-sidebar-author__content">
                <p>
                  Halvah macaroon marzipan sugar plum powder cotton candy
                  cheesecake.
                </p>
              </div>
            </div>

            <div className="blog-sidebar-categories">
              <ul className="blog-sidebar-categories__list">
                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Toffee
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Pudding
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Cupcake pie
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Pudding
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Sugar plum
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Topping
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Lemon
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Gingerbread
                  </Link>
                </li>

                <li className="blog-sidebar-categories__item">
                  <Link to="/" className="blog-sidebar-categories__link">
                    Cupcake
                  </Link>
                </li>
              </ul>
            </div>

            <div className="blog-sidebar-search">
              <h3 className="blog-sidebar__heading">Search</h3>

              <form className="blog-sidebar-search-form">
                <input
                  type="search"
                  className="blog-sidebar-search-form__input"
                />
              </form>
            </div>

            <div className="blog-sidebar-recent-posts">
              <h3 className="blog-sidebar__heading">Recent articles</h3>

              <ul className="blog-sidebar-recent-posts__list">
                <li className="blog-sidebar-recent-posts__item">
                  <Link to="/" className="blog-sidebar-recent-posts__link">
                    Danish cookie chocolate bar brownie sesame
                  </Link>
                </li>

                <li className="blog-sidebar-recent-posts__item">
                  <Link to="/" className="blog-sidebar-recent-posts__link">
                    Oat cake lemon drops topping gingerbread
                  </Link>
                </li>

                <li className="blog-sidebar-recent-posts__item">
                  <Link to="/" className="blog-sidebar-recent-posts__link">
                    Halvah danish candy jelly cookie
                  </Link>
                </li>

                <li className="blog-sidebar-recent-posts__item">
                  <Link to="/" className="blog-sidebar-recent-posts__link">
                    Jelly beans toffee macaroon oat cake
                  </Link>
                </li>

                <li className="blog-sidebar-recent-posts__item">
                  <Link to="/" className="blog-sidebar-recent-posts__link">
                    Chocolate dragée halvah jelly-o muffin tart
                  </Link>
                </li>

                <li className="blog-sidebar-recent-posts__item">
                  <Link to="/" className="blog-sidebar-recent-posts__link">
                    Candy canes cotton marzipan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
