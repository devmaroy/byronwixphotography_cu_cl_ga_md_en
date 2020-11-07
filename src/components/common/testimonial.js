import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

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
  authorImage: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
  authorName: PropTypes.string.isRequired,
  authorPosition: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Testimonial;
