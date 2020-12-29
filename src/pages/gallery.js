import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import GalleryContent from '../components/subpages/gallery/galleryContent';

// Query
const query = graphql`
  {
    gallery: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/gallery/" }
        base: { regex: "/index/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            seo {
              title
              description
            }
            info {
              heading
              text
            }
          }
        }
      }
    }
    galleryItems: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/gallery/items/" }
      }
      sort: { fields: [base], order: ASC }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const galleryData = data.gallery.nodes[0].childMarkdownRemark;
  const galleryItemsData = data.galleryItems.nodes;

  return (
    <Layout>
      <SEO
        title={galleryData.frontmatter.seo.title}
        description={galleryData.frontmatter.seo.description}
      />

      <section className="subpage gallery">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading={galleryData.frontmatter.info.heading}>
              {galleryData.frontmatter.info.text}
            </SubpageHeader>

            <GalleryContent galleryItems={galleryItemsData} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
