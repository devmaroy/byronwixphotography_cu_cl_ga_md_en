/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Slider from 'react-slick';
import Testimonial from './testimonial';

// Query
const query = graphql`
  query TestimonialsPageQuery {
    testimonials: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/pages/testimonials/" }
        base: { regex: "/index/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading
            bgImage {
              childImageSharp {
                fluid(maxWidth: 1440, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    testimonialsItems: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/pages/testimonials/items/" }
      }
      sort: { fields: [base], order: ASC }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            image {
              childImageSharp {
                fixed(width: 32, height: 32, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            name
            position
          }
          html
        }
      }
    }
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(query);
  const testimonialsData = data.testimonials.nodes[0].childMarkdownRemark;
  const testimonialsItemsData = data.testimonialsItems.nodes;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__inner">
          <h2
            className="section__heading testimonials__heading"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: testimonialsData.frontmatter.heading,
            }}
          />

          <BackgroundImage
            fluid={testimonialsData.frontmatter.bgImage.childImageSharp.fluid}
            className="testimonials__list"
          >
            <Slider {...settings}>
              {testimonialsItemsData.map(
                ({
                  childMarkdownRemark: {
                    frontmatter: { id, image, name, position },
                    html,
                  },
                }) => (
                  <Testimonial
                    key={id}
                    authorImage={image.childImageSharp.fixed}
                    authorName={name}
                    authorPosition={position}
                  >
                    {html}
                  </Testimonial>
                ),
              )}
            </Slider>

            <div className="testimonials__shape" />
          </BackgroundImage>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
