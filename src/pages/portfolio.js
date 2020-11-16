import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import PortfolioCategories from './portfolioCategories';
import PortfolioContent from './portfolioContent';

const Portfolio = () => {
  // State that will be passed to subcomponents - portfolio categories and content
  const [selectedCategory, setSelectedCategory] = useState('all'); // Selected category slug (all is default)

  const [page, setPage] = useState(1);
  const [perPage] = useState(3);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  const changeCategory = (category) => {
    setSelectedCategory(category);
    setIsAllLoaded(false);
    setPage(1);
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
              page={page}
              setPage={setPage}
              perPage={perPage}
              isAllLoaded={isAllLoaded}
              setIsAllLoaded={setIsAllLoaded}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
