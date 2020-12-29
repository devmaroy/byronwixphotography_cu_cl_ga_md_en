import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import PortfolioCategories from '../components/subpages/portfolio/portfolioCategories';
import PortfolioContent from '../components/subpages/portfolio/portfolioContent';

// Query
const query = graphql`
  query PortfolioSubpageQuery {
    portfolio: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/portfolio/" }
        base: { regex: "/index/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            seo {
              title
              description
            }
            info {
              heading
              text
            }
          }
        }
      }
    }
    portfolioItems: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/portfolio/items/" }
      }
      sort: { fields: [base], order: ASC }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories {
              id
              name
              slug
            }
          }
          html
        }
      }
    }
    portfolioCategories: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/portfolio/items/" }
      }
    ) {
      group(field: childMarkdownRemark___frontmatter___categories___name) {
        name: fieldValue
      }
    }
  }
`;

const Portfolio = () => {
  const data = useStaticQuery(query);
  const portfolioData = data.portfolio.nodes[0].childMarkdownRemark;
  const portfolioItemsData = data.portfolioItems.nodes;
  const portfolioCategoriesData = data.portfolioCategories.group;

  // Selected category slug (all is default)
  const [selectedCategory, setSelectedCategory] = useState('all');
  let resetCategoriesFunc;

  const changeCategory = (category) => {
    setSelectedCategory(category);

    // run cleanup
    resetCategoriesFunc();
  };

  const getCategories = () => {
    return portfolioCategoriesData.map(({ name }) => {
      const slug = name.replace(/ /g, '-').toLowerCase();
      const updatedCategory = { slug, name };

      return updatedCategory;
    });
  };

  const resetCategories = (resetChildFunc) => {
    resetCategoriesFunc = resetChildFunc;
  };

  return (
    <Layout>
      <SEO
        title={portfolioData.frontmatter.seo.title}
        description={portfolioData.frontmatter.seo.description}
      />

      <section className="subpage portfolio">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading={portfolioData.frontmatter.info.heading}>
              {portfolioData.frontmatter.info.text}
            </SubpageHeader>

            <PortfolioCategories
              portfolioCategories={getCategories()}
              selectedCategory={selectedCategory}
              changeCategory={changeCategory}
            />

            <PortfolioContent
              portfolioItems={portfolioItemsData}
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
