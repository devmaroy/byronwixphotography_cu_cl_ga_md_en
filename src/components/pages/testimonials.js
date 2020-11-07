/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import Testimonial from '../common/testimonial';
import testimonialImage01 from '../../images/pages/testimonials/testimonial-01.jpg';
import testimonialImage02 from '../../images/pages/testimonials/testimonial-02.jpg';
import testimonialImage03 from '../../images/pages/testimonials/testimonial-03.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    autoplay: false,
    // autoplaySpeed: 6000,
    autoplaySpeed: 6000000000,
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
                authorImage={testimonialImage01}
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
                authorImage={testimonialImage02}
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
                authorImage={testimonialImage03}
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
