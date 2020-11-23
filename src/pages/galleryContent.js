import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import LoadMorePagination from '../components/common/loadMorePagination';
import getItems from '../data/gallery';

// Query
const query = graphql`
  query galleryImages {
    galleryImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "subpages/gallery" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const GalleryContent = () => {
  const data = useStaticQuery(query);
  const galleryImages = data.galleryImages.nodes;
  const galleryItems = getItems(galleryImages);

  const masonryOptions = {
    transitionDuration: '0.6s',
  };

  return (
    <>
      <div className="gallery-images">
        <LoadMorePagination perPage={9} items={galleryItems}>
          {(galleryItemsPaginated) => (
            <Masonry options={masonryOptions}>
              {galleryItemsPaginated.map(({ id, image, heading, content }) => (
                <div key={id} className="gallery-image">
                  <Img fluid={image} className="gallery-image__img" />

                  <div className="gallery-image__description">
                    <h3 className="gallery-image__heading">{heading}</h3>

                    <div
                      className="gallery-image__text"
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          )}
        </LoadMorePagination>
      </div>
    </>
  );
};

export default GalleryContent;
