/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import Img from 'gatsby-image';

// Query
const query = graphql`
  query InstagramFeedQuery {
    instagramFeed: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/instagram/" }
        base: { regex: "/index/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading
            name
            url
          }
        }
      }
    }
    instagramFeedItems: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/instagram/items/" }
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
          }
        }
      }
    }
  }
`;

const InstagramFeed = () => {
  const data = useStaticQuery(query);
  const instagramFeedData = data.instagramFeed.nodes[0].childMarkdownRemark;
  const instagramFeedItemsData = data.instagramFeedItems.nodes;

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
        <h3
          className="instagram-feed__heading"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: instagramFeedData.frontmatter.heading,
          }}
        />

        <a
          href={instagramFeedData.frontmatter.url}
          className="instagram-feed__link"
        >
          {instagramFeedData.frontmatter.name}
        </a>
      </div>

      <div className="instagram-feed__list">
        <Slider {...settings}>
          {instagramFeedItemsData.map(
            ({
              childMarkdownRemark: {
                frontmatter: { id, image },
              },
            }) => (
              <div key={id} className="instagram-feed__item">
                <Img
                  fluid={image.childImageSharp.fluid}
                  className="instagram-feed__image"
                />
              </div>
            ),
          )}
        </Slider>
      </div>
    </div>
  );
};

export default InstagramFeed;
