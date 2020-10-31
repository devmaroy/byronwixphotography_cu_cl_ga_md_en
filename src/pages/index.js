import React from 'react';
// eslint-disable-next-line no-unused-vars
import FontAwesomeLibrary from '../libraries/fontAwesome';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import Hero from '../components/pages/hero';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
