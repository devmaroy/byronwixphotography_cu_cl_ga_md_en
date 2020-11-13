/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import Img from 'gatsby-image';

// Query
const query = graphql`
  {
    instagramFeedImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "instagram-feed" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const InstagramFeed = () => {
  const data = useStaticQuery(query);
  const instagramFeedImages = data.instagramFeedImages.nodes;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="instagram-feed">
      <div className="instagram-feed__header">
        <h3 className="instagram-feed__heading">Follow me on Instagram</h3>
        <a
          href="https://instagram.com/byronwix.photo"
          className="instagram-feed__link"
        >
          @byronwix.photo
        </a>
      </div>

      <div className="instagram-feed__list">
        <Slider {...settings}>
          <div className="instagram-feed__item">
            <Img
              fluid={instagramFeedImages[0].childImageSharp.fluid}
              className="instagram-feed__image"
            />
          </div>

          <div className="instagram-feed__item">
            <Img
              fluid={instagramFeedImages[1].childImageSharp.fluid}
              className="instagram-feed__image"
            />
          </div>

          <div className="instagram-feed__item">
            <Img
              fluid={instagramFeedImages[2].childImageSharp.fluid}
              className="instagram-feed__image"
            />
          </div>

          <div className="instagram-feed__item">
            <Img
              fluid={instagramFeedImages[3].childImageSharp.fluid}
              className="instagram-feed__image"
            />
          </div>

          <div className="instagram-feed__item">
            <Img
              fluid={instagramFeedImages[4].childImageSharp.fluid}
              className="instagram-feed__image"
            />
          </div>

          <div className="instagram-feed__item">
            <Img
              fluid={instagramFeedImages[5].childImageSharp.fluid}
              className="instagram-feed__image"
            />
          </div>

          <div className="instagram-feed__item">
            <Img
              fluid={instagramFeedImages[6].childImageSharp.fluid}
              className="instagram-feed__image"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InstagramFeed;
