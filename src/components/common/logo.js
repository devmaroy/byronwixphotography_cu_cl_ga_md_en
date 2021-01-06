import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import logoType from '../../types/components/common/logoType';

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
  ...logoType,
};

export default Logo;
