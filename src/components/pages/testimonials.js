import React from 'react';
import Testimonial from '../common/testimonial';
import testimonialImage01 from '../../images/pages/testimonials/testimonial-01.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__inner">
          <h2 className="section__heading testimonials__heading">
            What people say about me?
          </h2>

          <div className="testimonials__list">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
