import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import Social from '../components/common/social';

// Query
const query = graphql`
  {
    aboutPhoto: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "subpages/about" }
        name: { eq: "about" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  const aboutPhoto = data.aboutPhoto.nodes[0].childImageSharp;

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

            <div className="about__wrapper">
              <div className="about__info">
                <div className="about__photo">
                  <Img
                    fluid={aboutPhoto.fluid}
                    className="about__image"
                    alt="Byron Wix portrait"
                  />
                </div>

                <div className="about__social">
                  <Social />
                </div>
              </div>

              <div className="about__content">
                <div className="about__text">
                  <h2>
                    Lemon drops tootsie roll brownie lemon drops. Sweet roll
                    gingerbread.
                  </h2>

                  <p>
                    Chocolate cake tart halvah caramels wafer chocolate sugar
                    plum jelly beans candy. Ice cream toffee tiramisu bear claw
                    sweet. Gummies cake icing chocolate bar tart jujubes topping
                    sugar plum soufflé.
                  </p>

                  <p>
                    Pastry danish powder muffin candy cookie. Biscuit muffin oat
                    cake candy canes dragée tart cupcake marzipan. Pudding
                    fruitcake brownie cupcake marshmallow jelly-o danish. Bonbon
                    sugar plum tart sweet sweet roll cotton candy cupcake.
                    Chocolate cookie cupcake toffee donut dessert.
                  </p>
                </div>

                <button
                  className="button button--secondary about__cta"
                  type="button"
                >
                  Download CV
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
