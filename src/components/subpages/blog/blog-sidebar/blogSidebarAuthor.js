import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const BlogSidebarAuthor = ({ heading, image, children }) => {
  return (
    <div className="blog-sidebar-author">
      <div className="blog-sidebar-author__image-wrapper">
        <Img fluid={image} className="blog-sidebar-author__image" />
      </div>

      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <div className="blog-sidebar-author__content">{children}</div>
    </div>
  );
};

BlogSidebarAuthor.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default BlogSidebarAuthor;
