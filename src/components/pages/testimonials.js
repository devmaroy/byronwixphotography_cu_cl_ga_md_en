/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import Testimonial from '../common/testimonial';
import testimonialImage01 from '../../images/pages/testimonials/testimonial-01.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
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
                  Pastry gummies pastry marshmallow cookie”
                </p>
              </Testimonial>

              <Testimonial
                authorImage={testimonialImage01}
                authorName="Debbie W. Stephens"
                authorPosition="Freelancer"
              >
                <p>
                  ”Cupcake cake sesame snaps lollipop powder cupcake jelly
                  marzipan. Halvah pie dragée carrot cake pudding chocolate.
                  Pastry gummies pastry marshmallow cookie”
                </p>
              </Testimonial>

              <Testimonial
                authorImage={testimonialImage01}
                authorName="Debbie W. Stephens"
                authorPosition="Freelancer"
              >
                <p>
                  ”Cupcake cake sesame snaps lollipop powder cupcake jelly
                  marzipan. Halvah pie dragée carrot cake pudding chocolate.
                  Pastry gummies pastry marshmallow cookie”
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
