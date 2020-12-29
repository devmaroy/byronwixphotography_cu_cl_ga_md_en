import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Query
const query = graphql`
  query HeroPageQuery {
    hero: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/pages/hero/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading_1
            heading_2
            heading_3
            headingHighlight_1
            headingHighlight_2
            cta {
              text
              url
            }
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const heroData = data.hero.nodes[0].childMarkdownRemark;

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__welcome">
            <h1 className="hero__heading">
              <span className="hero__heading_break">
                {heroData.frontmatter.heading_1}
              </span>
              {heroData.frontmatter.heading_2}{' '}
              <span className="hero__highlight">
                {heroData.frontmatter.headingHighlight_1}
              </span>{' '}
              {heroData.frontmatter.heading_3}{' '}
              <span className="hero__highlight">
                {heroData.frontmatter.headingHighlight_2}
              </span>
            </h1>

            <div
              className="hero__text"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: heroData.html }}
            />

            <div className="hero-cta">
              <Link
                to={heroData.frontmatter.cta.url}
                className="hero-cta__link"
              >
                {heroData.frontmatter.cta.text}
              </Link>
            </div>
          </div>

          <div className="hero__photo">
            <Img
              fluid={heroData.frontmatter.image.childImageSharp.fluid}
              className="hero__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
