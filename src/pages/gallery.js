import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import GalleryContent from '../components/subpages/gallery/galleryContent';

const Gallery = () => {
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

            <GalleryContent />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
