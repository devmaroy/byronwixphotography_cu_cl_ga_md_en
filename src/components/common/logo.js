import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

const Logo = ({ alt = false }) => {
  return (
    <div className={classNames('logo', { 'logo--alt': alt })}>
      <Link
        to="/"
        className={classNames('logo__link', {
          'logo__link--alt': alt,
        })}
      >
        Byron Wix <span className="logo__highlight">Photography</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  alt: PropTypes.bool,
};

export default Logo;
