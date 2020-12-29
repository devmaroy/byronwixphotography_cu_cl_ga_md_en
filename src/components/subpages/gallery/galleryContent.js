import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import LoadMorePagination from '../../common/loadMorePagination';

const GalleryContent = ({ galleryItems }) => {
  const masonryOptions = {
    transitionDuration: '0.6s',
  };

  return (
    <div className="gallery-images">
      <LoadMorePagination perPage={9} items={galleryItems}>
        {(galleryItemsPaginated) => (
          <Masonry options={masonryOptions}>
            {galleryItemsPaginated.map(
              ({
                childMarkdownRemark: {
                  frontmatter: { id, image, heading },
                  html,
                },
              }) => (
                <div key={id} className="gallery-image">
                  <Img
                    fluid={image.childImageSharp.fluid}
                    className="gallery-image__img"
                  />

                  <div className="gallery-image__description">
                    <h3 className="gallery-image__heading">{heading}</h3>

                    <div
                      className="gallery-image__text"
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </div>
                </div>
              ),
            )}
          </Masonry>
        )}
      </LoadMorePagination>
    </div>
  );
};

GalleryContent.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        frontmatter: PropTypes.shape({
          id: PropTypes.string.isRequired,
          heading: PropTypes.string.isRequired,
          image: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.shape({
                aspectRatio: PropTypes.number.isRequired,
                base64: PropTypes.string.isRequired,
                sizes: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired,
                srcSet: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default GalleryContent;
