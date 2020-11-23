import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import LoadMorePagination from '../components/common/loadMorePagination';
import { getItems } from '../data/portfolio';

// Query
const query = graphql`
  query portfolioImages {
    portfolioImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "subpages/portfolio" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const PortfolioContent = ({ selectedCategory, resetCategories }) => {
  const data = useStaticQuery(query);
  const portfolioImages = data.portfolioImages.nodes;
  const portfolioItems = getItems(portfolioImages);

  const filterPortfolioItems = () => {
    return portfolioItems.filter((portfolioItem) => {
      return portfolioItem.categories.some((portfolioItemCategory) => {
        if (selectedCategory === 'all') return true;

        return portfolioItemCategory.slug === selectedCategory;
      });
    });
  };

  return (
    <>
      <LoadMorePagination
        perPage={3}
        items={filterPortfolioItems(portfolioItems)}
        onReset={resetCategories}
      >
        {(portfolioItemsPaginated) => (
          <div className="portfolio-gallery">
            {portfolioItemsPaginated.map(
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
        )}
      </LoadMorePagination>
    </>
  );
};

PortfolioContent.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  resetCategories: PropTypes.func.isRequired,
};

export default PortfolioContent;
