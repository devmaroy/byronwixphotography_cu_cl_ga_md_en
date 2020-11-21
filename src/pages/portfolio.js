import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import PortfolioCategories from './portfolioCategories';
import PortfolioContent from './portfolioContent';

const Portfolio = () => {
  // Selected category slug (all is default)
  const [selectedCategory, setSelectedCategory] = useState('all');
  let resetCategoriesFunc;

  const changeCategory = (category) => {
    setSelectedCategory(category);

    // run cleanup
    resetCategoriesFunc();
  };

  const resetCategories = (resetChildFunc) => {
    resetCategoriesFunc = resetChildFunc;
  };

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Donut donut fruitcake apple pie brownie halvah chocolate bar. Bonbon marshmallow danish tootsie roll donut."
      />

      <section className="subpage portfolio">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading="Portfolio">
              <p>
                Donut donut fruitcake apple pie brownie halvah chocolate bar.
                Bonbon marshmallow danish tootsie roll donut.
              </p>
            </SubpageHeader>

            <PortfolioCategories
              selectedCategory={selectedCategory}
              changeCategory={changeCategory}
            />

            <PortfolioContent
              selectedCategory={selectedCategory}
              resetCategories={resetCategories}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
