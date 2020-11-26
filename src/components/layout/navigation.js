import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Social from '../common/social';

const Navigation = ({ isOpen, toggleNavigation }) => {
  return (
    <>
      <button
        type="button"
        className={classNames('navigation-toggle', { 'is-open': isOpen })}
        onClick={toggleNavigation}
      >
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--one',
            { 'is-open': isOpen },
          )}
        />
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--two',
            { 'is-open': isOpen },
          )}
        />
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--three',
            { 'is-open': isOpen },
          )}
        />
      </button>

      <div className="navigation-wrapper">
        <nav className={classNames('navigation', { 'is-open': isOpen })}>
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                to="/"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Home
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/about"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                About
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/portfolio"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Portfolio
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/gallery"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Gallery
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/contact"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Contact
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/blog"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="navigation__social">
          <Social />
        </div>
      </div>
    </>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
};

export default Navigation;
