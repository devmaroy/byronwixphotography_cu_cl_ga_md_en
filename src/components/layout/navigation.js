import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <>
      <button type="button" className="navigation-toggle">
        <div className="navigation-toggle__bar navigation-toggle__bar--one" />
        <div className="navigation-toggle__bar navigation-toggle__bar--two" />
        <div className="navigation-toggle__bar navigation-toggle__bar--three" />
      </button>

      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Home
            </Link>
          </li>

          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              About
            </Link>
          </li>

          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Portfolio
            </Link>
          </li>

          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Gallery
            </Link>
          </li>

          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Contact
            </Link>
          </li>

          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
