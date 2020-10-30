import React, { useState } from 'react';
import Logo from '../common/logo';
import Navigation from './navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo alt={isOpen} />
          <Navigation isOpen={isOpen} toggleNavigation={toggleNavigation} />
        </div>
      </div>
    </header>
  );
};

export default Header;
