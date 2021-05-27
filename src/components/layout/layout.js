import React from 'react';
import { Tween } from 'react-gsap';
import layoutType from '../../types/components/layout/layoutType';
import Header from './header';
import Footer from './footer';
import InstagramFeed from '../common/instagramFeed';
import PreFooter from './preFooter';

const Layout = ({ children }) => {
  return (
    <>
      <Tween to={{ autoAlpha: 1 }} ease="power1.out">
        <div className="site-content">
          <Header />

          <main className="main">{children}</main>

          <InstagramFeed />
          <PreFooter />
          <Footer />
        </div>
      </Tween>
    </>
  );
};

Layout.propTypes = {
  ...layoutType,
};

export default Layout;
