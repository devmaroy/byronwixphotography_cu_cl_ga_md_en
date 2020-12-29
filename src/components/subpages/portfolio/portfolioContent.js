import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import LoadMorePagination from '../../common/loadMorePagination';

const PortfolioContent = ({
  portfolioItems,
  selectedCategory,
  resetCategories,
}) => {
  const filterPortfolioItems = () => {
    return portfolioItems.filter((portfolioItem) => {
      return portfolioItem.childMarkdownRemark.frontmatter.categories.some(
        (portfolioItemCategory) => {
          if (selectedCategory === 'all') return true;
          return portfolioItemCategory.slug === selectedCategory;
        },
      );
    });
  };

  return (
    <>
      <LoadMorePagination
        perPage={6}
        items={filterPortfolioItems(portfolioItems)}
        onReset={resetCategories}
      >
        {(portfolioItemsPaginated) => (
          <div className="portfolio-gallery">
            {portfolioItemsPaginated.map(
              ({ childMarkdownRemark: { frontmatter, html } }) => (
                <div key={frontmatter.id} className="portfolio-gallery__item">
                  <Img
                    fluid={frontmatter.image.childImageSharp.fluid}
                    className="portfolio-gallery__image"
                  />

                  <div className="portfolio-gallery__description">
                    <ul className="portfolio-gallery-categories">
                      {frontmatter.categories.map(
                        ({ id: catId, name, slug }) => (
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
                        ),
                      )}
                    </ul>

                    <div
                      className="portfolio-gallery__text"
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: html }}
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
  portfolioItems: PropTypes.arrayOf(
    PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        frontmatter: PropTypes.shape({
          id: PropTypes.string.isRequired,
          image: PropTypes.shape({
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
              slug: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
            }).isRequired,
          ).isRequired,
        }).isRequired,
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  resetCategories: PropTypes.func.isRequired,
};

export default PortfolioContent;
