import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';

// Query
const query = graphql`
  query portfolioImages {
    portfolioImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "pages/portfolio" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Portfolio = () => {
  const data = useStaticQuery(query);
  const portfolioImages = data.portfolioImages.nodes;

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Donut donut fruitcake apple pie brownie halvah chocolate bar. Bonbon marshmallow danish tootsie roll donut."
      />

      <section className="subpage portfolio">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading="Portfolio">
              <p>
                Donut donut fruitcake apple pie brownie halvah chocolate bar.
                Bonbon marshmallow danish tootsie roll donut.
              </p>
            </SubpageHeader>

            <ul className="portfolio-menu">
              <li className="portfolio-menu__item">
                <Link to="/" className="portfolio-menu__link">
                  Muffin
                </Link>
              </li>

              <li className="portfolio-menu__item">
                <Link to="/" className="portfolio-menu__link">
                  Cupcake
                </Link>
              </li>

              <li className="portfolio-menu__item">
                <Link to="/" className="portfolio-menu__link">
                  Bonbon pie
                </Link>
              </li>

              <li className="portfolio-menu__item">
                <Link to="/" className="portfolio-menu__link">
                  Tarts
                </Link>
              </li>

              <li className="portfolio-menu__item">
                <Link to="/" className="portfolio-menu__link">
                  Sesame
                </Link>
              </li>

              <li className="portfolio-menu__item">
                <Link to="/" className="portfolio-menu__link">
                  Bear
                </Link>
              </li>

              <li className="portfolio-menu__item">
                <Link to="/" className="portfolio-menu__link">
                  Liquorice
                </Link>
              </li>
            </ul>

            <div className="portfolio-gallery">
              <div className="portfolio-gallery__item">
                <Img
                  fluid={portfolioImages[0].childImageSharp.fluid}
                  className="portfolio-gallery__image"
                />

                <div className="portfolio-gallery__description">
                  <ul className="portfolio-gallery-categories">
                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Muffin
                      </Link>
                    </li>
                  </ul>

                  <div className="portfolio-gallery__text">
                    <p>Pudding bear claw jelly beans chupa chups marzipan</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-gallery__item">
                <Img
                  fluid={portfolioImages[1].childImageSharp.fluid}
                  className="portfolio-gallery__image"
                />

                <div className="portfolio-gallery__description">
                  <ul className="portfolio-gallery-categories">
                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Cupcakes
                      </Link>
                    </li>

                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Bonbon pie
                      </Link>
                    </li>
                  </ul>

                  <div className="portfolio-gallery__text">
                    <p>Icing sesame snaps tiramisu cookie jelly-o</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-gallery__item">
                <Img
                  fluid={portfolioImages[2].childImageSharp.fluid}
                  className="portfolio-gallery__image"
                />

                <div className="portfolio-gallery__description">
                  <ul className="portfolio-gallery-categories">
                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Tarts
                      </Link>
                    </li>
                  </ul>

                  <div className="portfolio-gallery__text">
                    <p>Cupcake cake cookie muffin chocolate candy</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-gallery__item">
                <Img
                  fluid={portfolioImages[3].childImageSharp.fluid}
                  className="portfolio-gallery__image"
                />

                <div className="portfolio-gallery__description">
                  <ul className="portfolio-gallery-categories">
                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Sesame
                      </Link>
                    </li>

                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Bear
                      </Link>
                    </li>

                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Liquorice
                      </Link>
                    </li>
                  </ul>

                  <div className="portfolio-gallery__text">
                    <p>Jujubes cheesecake gummi bears jujubes lollipop apple</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-gallery__item">
                <Img
                  fluid={portfolioImages[4].childImageSharp.fluid}
                  className="portfolio-gallery__image"
                />

                <div className="portfolio-gallery__description">
                  <ul className="portfolio-gallery-categories">
                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Muffin
                      </Link>
                    </li>
                  </ul>

                  <div className="portfolio-gallery__text">
                    <p>Marzipan donut tootsie roll bonbon</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-gallery__item">
                <Img
                  fluid={portfolioImages[5].childImageSharp.fluid}
                  className="portfolio-gallery__image"
                />

                <div className="portfolio-gallery__description">
                  <ul className="portfolio-gallery-categories">
                    <li className="portfolio-gallery-categories__item">
                      <Link
                        to="/"
                        className="portfolio-gallery-categories__link"
                      >
                        Liquorice
                      </Link>
                    </li>
                  </ul>

                  <div className="portfolio-gallery__text">
                    <p>Pudding jelly beans icing bonbon danish gummies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-gallery__meta">
              <button
                className="button button--outline-primary portfolio-gallery__cta"
                type="button"
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
