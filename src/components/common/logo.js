import React from 'react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        Byron Wix <span className="logo__highlight">Photography</span>
      </Link>
    </div>
  );
};

export default Logo;
