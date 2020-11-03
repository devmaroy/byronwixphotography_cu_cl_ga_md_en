import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__copyright">
            <p>
              Copyright &copy; {new Date().getFullYear()},{' '}
              <Link to="/" className="footer__link">
                ByronWix.com
              </Link>
            </p>
          </div>

          <div className="footer__info">
            <p>
              Made with <span className="footer__highlight">love</span> by{' '}
              <a href="https://marekmatejovic.com/" className="footer__link">
                devmaroy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
