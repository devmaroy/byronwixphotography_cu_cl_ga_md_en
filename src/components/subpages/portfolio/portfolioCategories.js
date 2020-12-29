import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PortfolioCategories = ({
  portfolioCategories,
  selectedCategory,
  changeCategory,
}) => {
  return (
    <ul className="portfolio-menu">
      <li className="portfolio-menu__item">
        <button
          type="button"
          className={classNames('portfolio-menu__link', {
            'portfolio-menu__link--active': selectedCategory === 'all',
          })}
          onClick={() => changeCategory('all')}
        >
          All
        </button>
      </li>

      {portfolioCategories.map(({ slug, name }) => (
        <li key={slug} className="portfolio-menu__item">
          <button
            type="button"
            className={classNames('portfolio-menu__link', {
              'portfolio-menu__link--active': slug === selectedCategory,
            })}
            onClick={() => changeCategory(slug)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

PortfolioCategories.propTypes = {
  portfolioCategories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default PortfolioCategories;
