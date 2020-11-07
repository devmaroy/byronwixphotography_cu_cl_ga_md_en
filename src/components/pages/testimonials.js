/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import Testimonial from '../common/testimonial';

// Query
const query = graphql`
  {
    testimonialsImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "pages/testimonials" }
        base: { regex: "/testimonial-/" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 32, height: 32, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(query);
  const testimonialsImages = data.testimonialsImages.nodes;

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
          <h2 className="section__heading testimonials__heading">
            What people say about me?
          </h2>

          <div className="testimonials__list">
            <Slider {...settings}>
              <Testimonial
                authorImage={testimonialsImages[0].childImageSharp.fixed}
                authorName="Debbie W. Stephens"
                authorPosition="Freelancer"
              >
                <p>
                  ”Cupcake cake sesame snaps lollipop powder cupcake jelly
                  marzipan. Halvah pie dragée carrot cake pudding chocolate.
                  Pastry gummies pastry marshmallow cookie.”
                </p>
              </Testimonial>

              <Testimonial
                authorImage={testimonialsImages[1].childImageSharp.fixed}
                authorName="Timothy B. Shaw"
                authorPosition="CEO at Shawness Technology, Inc."
              >
                <p>
                  “Tiramisu tiramisu jelly beans. Ice cream bear claw cookie
                  danish. Bear claw tart gingerbread chupa chups. Carrot cake
                  macaroon pie lollipop carrot cake liquorice cotton.”
                </p>
              </Testimonial>

              <Testimonial
                authorImage={testimonialsImages[2].childImageSharp.fixed}
                authorName="William Molina"
                authorPosition="Developer"
              >
                <p>
                  “Marshmallow bear claw dessert croissant sweet roll chocolate
                  cake jelly beans icing. Gummies apple pie marzipan bear claw
                  lollipop. Carrot cake roll. Soufflé tart donut.”
                </p>
              </Testimonial>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
