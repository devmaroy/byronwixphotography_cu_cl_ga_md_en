import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { categories } from '../data/portfolio';

const PortfolioCategories = ({ selectedCategory, changeCategory }) => {
  return (
    <ul className="portfolio-menu">
      {categories.map(({ id, slug, name }) => (
        <li key={id} className="portfolio-menu__item">
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
  selectedCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default PortfolioCategories;
