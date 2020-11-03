import React, { useState, useEffect } from 'react';
import Logo from '../common/logo';
import Navigation from './navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('is-open', isOpen);

    return () => {
      document.body.classList.remove('is-open');
    };
  }, [isOpen]);

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
