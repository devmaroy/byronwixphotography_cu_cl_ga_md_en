import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { getItems } from '../data/portfolio';

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

const PortfolioContent = ({
  page,
  setPage,
  perPage,
  isAllLoaded,
  setIsAllLoaded,
  selectedCategory,
}) => {
  const data = useStaticQuery(query);
  const portfolioImages = data.portfolioImages.nodes;
  const portfolioItems = getItems(portfolioImages);

  const paginatePortfolioItems = (portfolioItemsToPaginate) => {
    return portfolioItemsToPaginate.slice(0, page * perPage);
  };

  const filterPortfolioItems = () => {
    return portfolioItems.filter((portfolioItem) => {
      return portfolioItem.categories.some((portfolioItemCategory) => {
        if (selectedCategory === 'all') return true;

        return portfolioItemCategory.slug === selectedCategory;
      });
    });
  };

  const getPortfolioItems = () => {
    return filterPortfolioItems(portfolioItems);
  };

  const getPaginatedPortfolioItems = () => {
    const paginatedPortfolioItems = paginatePortfolioItems(getPortfolioItems());

    return paginatedPortfolioItems;
  };

  const loadMorePortfolioItems = () => {
    const totalPages = Math.ceil(getPortfolioItems().length / perPage);

    setPage((currentPage) => currentPage + 1);
    setIsAllLoaded(totalPages === page + 1);
  };

  const hasPortfolioItemsToPaginate = () => {
    return getPortfolioItems().length >= perPage;
  };

  return (
    <>
      <div className="portfolio-gallery">
        {getPaginatedPortfolioItems().map(
          ({ id, image, categories, content }) => (
            <div key={id} className="portfolio-gallery__item">
              <Img fluid={image} className="portfolio-gallery__image" />

              <div className="portfolio-gallery__description">
                <ul className="portfolio-gallery-categories">
                  {categories.map(({ id: catId, name, slug }) => (
                    <li
                      key={catId}
                      className="portfolio-gallery-categories__item"
                    >
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
          ),
        )}
      </div>

      <div className="portfolio-gallery__meta">
        {!isAllLoaded && hasPortfolioItemsToPaginate() && (
          <button
            className="button button--outline-primary portfolio-gallery__cta"
            type="button"
            onClick={loadMorePortfolioItems}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

PortfolioContent.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  isAllLoaded: PropTypes.bool.isRequired,
  setIsAllLoaded: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default PortfolioContent;
