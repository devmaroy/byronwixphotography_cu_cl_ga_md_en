import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import Social from '../components/common/social';

// Query
const query = graphql`
  query AboutSubpageQuery {
    about: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/about/" }
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
            ctaText
            image {
              childImageSharp {
                fluid {
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

const About = () => {
  const data = useStaticQuery(query);
  const aboutData = data.about.nodes[0].childMarkdownRemark;

  return (
    <Layout>
      <SEO
        title={aboutData.frontmatter.seo.title}
        description={aboutData.frontmatter.seo.description}
      />

      <section className="subpage about">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading={aboutData.frontmatter.info.heading}>
              {aboutData.frontmatter.info.text}
            </SubpageHeader>

            <div className="about__wrapper">
              <div className="about__info">
                <div className="about__photo">
                  <Img
                    fluid={aboutData.frontmatter.image.childImageSharp.fluid}
                    className="about__image"
                    alt="Portrait"
                  />
                </div>

                <div className="about__social">
                  <Social />
                </div>
              </div>

              <div className="about__content">
                <div
                  className="about__text"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: aboutData.html }}
                />

                <button
                  className="button button--secondary about__cta"
                  type="button"
                >
                  {aboutData.frontmatter.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
