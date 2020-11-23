import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

// Query
const query = graphql`
  {
    aboutPhoto: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "subpages/about" }
        name: { eq: "about" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const BlogSidebar = () => {
  const data = useStaticQuery(query);
  const aboutPhoto = data.aboutPhoto.nodes[0].childImageSharp;
  console.log(aboutPhoto);

  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar-author">
        <div className="blog-sidebar-author__image-wrapper">
          <Img
            fluid={aboutPhoto.fluid}
            className="blog-sidebar-author__image"
          />
        </div>

        <h3 className="blog-sidebar__heading">About</h3>

        <div className="blog-sidebar-author__content">
          <p>
            Halvah macaroon marzipan sugar plum powder cotton candy cheesecake.
          </p>
        </div>
      </div>

      <div className="blog-sidebar-categories">
        <h3 className="blog-sidebar__heading">Categories</h3>

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

        <form className="form blog-sidebar-search-form">
          <input
            type="search"
            className="form__control blog-sidebar-search-form__input"
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
  );
};

export default BlogSidebar;
