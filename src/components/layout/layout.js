import React from 'react';
import layoutType from '../../types/components/layout/layoutType';
import Header from './header';
import Footer from './footer';
import InstagramFeed from '../common/instagramFeed';
import PreFooter from './preFooter';

const Layout = ({ children }) => {
  return (
    <>
      <div className="site-content">
        <Header />

        <main className="main">{children}</main>

        <InstagramFeed />
        <PreFooter />
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  ...layoutType,
};

export default Layout;
