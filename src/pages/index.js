import React from 'react';
// eslint-disable-next-line no-unused-vars
import FontAwesomeLibrary from '../libraries/fontAwesome';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import Hero from '../components/pages/hero/hero';
import Services from '../components/pages/services/services';
import Testimonials from '../components/pages/testimonials/testimonials';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Services />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
