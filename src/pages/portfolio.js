import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import classnames from 'classnames';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import { portfolioCategories, getPortfolioItems } from '../data/portfolio';

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
  const [page, setPage] = useState(1);
  const [perPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(
    portfolioCategories[0].slug,
  );

  const data = useStaticQuery(query);
  const portfolioImages = data.portfolioImages.nodes;
  const portfolioItems = getPortfolioItems(portfolioImages);

  const filterPortfolio = (portfolioData, categorySlug = selectedCategory) => {
    return portfolioData.filter((portfolio) => {
      return portfolio.categories.some((category) => {
        return category.slug === categorySlug;
      });
    });
  };

  const paginatePortfolio = (portfolioData) => {
    return portfolioData.slice(0, page * perPage);
  };

  const changeCategory = (slug) => {
    setPage(1);
    setAllLoaded(false);
    setSelectedCategory(slug);
  };

  const renderPortfolio = () => {
    const filteredPortfolio = filterPortfolio(portfolioItems);
    const paginatedPortfolio = paginatePortfolio(filteredPortfolio);

    return paginatedPortfolio.map(({ id, image, categories, content }) => (
      <div key={id} className="portfolio-gallery__item">
        <Img fluid={image} className="portfolio-gallery__image" />

        <div className="portfolio-gallery__description">
          <ul className="portfolio-gallery-categories">
            {categories.map(({ id: catId, name, slug }) => (
              <li key={catId} className="portfolio-gallery-categories__item">
                <Link
                  to={`/${slug}`}
                  className="portfolio-gallery-categories__link"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="portfolio-gallery__text"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    ));
  };

  const loadMore = () => {
    const filteredPortfolio = filterPortfolio(portfolioItems);
    // const paginatedPortfolio = paginatePortfolio(filteredPortfolio);
    const totalPages = Math.ceil(filteredPortfolio.length / perPage);
    const endReached = page + 1 === totalPages;

    setPage((currentPage) => currentPage + 1);
    setAllLoaded(endReached);
  };

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
              {portfolioCategories.map(({ id, slug, name }) => (
                <li key={id} className="portfolio-menu__item">
                  <button
                    type="button"
                    onClick={() => changeCategory(slug)}
                    className={classnames('portfolio-menu__link', {
                      'portfolio-menu__link--active': slug === selectedCategory,
                    })}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="portfolio-gallery">{renderPortfolio()}</div>

            <div className="portfolio-gallery__meta">
              {console.log(filterPortfolio(portfolioItems).length)}
              {filterPortfolio(portfolioItems).length <= perPage ||
                (!allLoaded && (
                  <button
                    className="button button--outline-primary portfolio-gallery__cta"
                    type="button"
                    onClick={loadMore}
                  >
                    Load more
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
