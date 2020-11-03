import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';

const About = () => {
  return (
    <Layout>
      <SEO
        title="About me"
        description="Ice cream toffee wafer cupcake. Cupcake carrot cake liquorice lollipop
      croissant jelly."
      />

      <section className="subpage about">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading="About">
              <p>
                Caramels tart tiramisu biscuit tootsie roll. Jelly cake gummies.
                Sesame snaps apple pie gummies donut pie. Candy pudding
                marzipan.
              </p>
            </SubpageHeader>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
