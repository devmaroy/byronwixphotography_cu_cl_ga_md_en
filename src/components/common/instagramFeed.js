/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import instagramItem01 from '../../images/instagram-feed/instagram-item-01.jpg';
import instagramItem02 from '../../images/instagram-feed/instagram-item-02.jpg';
import instagramItem03 from '../../images/instagram-feed/instagram-item-03.jpg';
import instagramItem04 from '../../images/instagram-feed/instagram-item-04.jpg';
import instagramItem05 from '../../images/instagram-feed/instagram-item-05.jpg';

const InstagramFeed = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
  };

  return (
    <div className="instagram-feed">
      <div className="instagram-feed__header">
        <h3 className="instagram-feed__heading">Follow me on Instagram</h3>
        <a
          href="https://instagram.com/byronwix.photo"
          className="instagram-feed__link"
        >
          @byronwix.photo
        </a>
      </div>

      <div className="instagram-feed__list">
        <Slider {...settings}>
          <div>
            <div
              className="instagram-item"
              style={{ backgroundImage: `url(${instagramItem01})` }}
            />
          </div>

          <div>
            <div
              className="instagram-item"
              style={{ backgroundImage: `url(${instagramItem02})` }}
            />
          </div>

          <div>
            <div
              className="instagram-item"
              style={{ backgroundImage: `url(${instagramItem03})` }}
            />
          </div>

          <div>
            <div
              className="instagram-item"
              style={{ backgroundImage: `url(${instagramItem04})` }}
            />
          </div>

          <div>
            <div
              className="instagram-item"
              style={{ backgroundImage: `url(${instagramItem05})` }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InstagramFeed;
