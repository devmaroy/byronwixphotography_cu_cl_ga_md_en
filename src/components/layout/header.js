import React from 'react';
import Logo from '../common/logo';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
