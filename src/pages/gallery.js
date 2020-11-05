import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';

// Query
const query = graphql`
  query galleryImages {
    galleryImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "pages/gallery" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const galleryImages = data.galleryImages.nodes;

  console.log(galleryImages);

  return (
    <Layout>
      <SEO
        title="Gallery"
        description="Cake ice cream donut chocolate bar caramels liquorice. Lemon drops caramels chocolate pie sweet roll apple pie lollipop powder jujubes."
      />

      <section className="subpage gallery">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading="Gallery">
              <p>
                Cake ice cream donut chocolate bar caramels liquorice. Lemon
                drops caramels chocolate pie sweet roll apple pie lollipop
                powder jujubes.
              </p>
            </SubpageHeader>

            <div className="gallery-images">
              <div className="gallery-image">
                <Img
                  fluid={galleryImages[0].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">Gingerbread</h3>

                  <div className="gallery-image__text">
                    <p>Liquorice tart powder macaroon wafer cheesecake</p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[1].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">
                    Sugar plum cake sweet
                  </h3>

                  <div className="gallery-image__text">
                    <p>Cake sesame snaps cotton caramels caramels</p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[2].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">
                    Liquorice cheesecake sweet
                  </h3>

                  <div className="gallery-image__text">
                    <p>Danish tiramisu sesame snaps candy canes brownie</p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[3].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">Cotton candy</h3>

                  <div className="gallery-image__text">
                    <p>Donut muffin jujubes jelly pudding carrot</p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[4].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">Toffee candy canes</h3>

                  <div className="gallery-image__text">
                    <p>Gingerbread cake tiramisu muffin gummi bears</p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[5].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">Lemon drops</h3>

                  <div className="gallery-image__text">
                    <p>Gummi bears sweet tart ice cream</p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[6].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">
                    Cake halvah soufflé
                  </h3>

                  <div className="gallery-image__text">
                    <p>
                      Bonbon tart lemon drops oat cake tootsie roll pie pastry
                    </p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[7].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">Powder cake</h3>

                  <div className="gallery-image__text">
                    <p>Pudding powder tootsie roll cream tootsie</p>
                  </div>
                </div>
              </div>

              <div className="gallery-image">
                <Img
                  fluid={galleryImages[8].childImageSharp.fluid}
                  className="gallery-image__img"
                />

                <div className="gallery-image__description">
                  <h3 className="gallery-image__heading">
                    Cake oat cake macaroon jujubes
                  </h3>

                  <div className="gallery-image__text">
                    <p>Marzipan brownie cotton candy icing jelly-o dessert</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery__meta">
              <button
                className="button button--outline-primary gallery__cta"
                type="button"
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
