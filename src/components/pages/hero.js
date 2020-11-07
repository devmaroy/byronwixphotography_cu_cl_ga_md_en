import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Query
const query = graphql`
  {
    heroPhoto: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "pages/hero" }
        name: { eq: "hero" }
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

const Hero = () => {
  const data = useStaticQuery(query);
  const heroPhoto = data.heroPhoto.nodes[0].childImageSharp;

  console.log(heroPhoto);

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__welcome">
            <h1 className="hero__heading">
              <span className="hero__heading_break">Hi! :)</span> My name is{' '}
              <span className="hero__highlight">Byron Wix</span> and I’m
              freelance <span className="hero__highlight">protographer</span>
            </h1>

            <div className="hero__text">
              <p>
                Chocolate cake tart halvah caramels wafer chocolate sugar plum
                jelly beans candy. Ice cream toffee tiramisu bear claw sweet.
                Gummies cake icing chocolate bar tart jujubes topping sugar plum
                soufflé.
              </p>

              <p>
                Pastry danish powder muffin candy cookie. Biscuit muffin oat
                cake candy canes dragée tart cupcake marzipan. Pudding fruitcake
                brownie cupcake marshmallow jelly-o danish. Bonbon sugar plum
                tart sweet sweet roll cotton candy cupcake. Chocolate cookie
                cupcake toffee donut dessert.
              </p>
            </div>

            <div className="hero-cta">
              <Link to="/" className="hero-cta__link">
                See my portfolio
              </Link>
            </div>
          </div>

          <div className="hero__photo">
            <Img fluid={heroPhoto.fluid} className="hero__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
