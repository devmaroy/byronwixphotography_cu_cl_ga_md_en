import React from 'react';
import PropTypes from 'prop-types';

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
          <img src={authorImage} alt={`${authorName} portrait`} />
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
  authorImage: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorPosition: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Testimonial;
