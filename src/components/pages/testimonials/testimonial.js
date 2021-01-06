import React from 'react';
import Img from 'gatsby-image';
import testimonialType from '../../../types/components/pages/testimonials/testimonialType';

const Testimonial = ({
  authorImage,
  authorName,
  authorPosition = 'Student',
  children,
}) => {
  return (
    <div className="testimonial">
      <div className="testimonial__text">{children}</div>

      <div className="testimonial-author">
        <div className="testimonial-author__image">
          <Img fixed={authorImage} alt={`${authorName} portrait`} />
        </div>

        <div className="testimonial-author__meta">
          <div className="testimonial-author__name">{authorName}</div>

          <div className="testimonial-author__position">{authorPosition}</div>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  ...testimonialType,
};

export default Testimonial;
