/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import instagramItem01 from '../../images/instagram-feed/instagram-item-01.jpg';
import instagramItem02 from '../../images/instagram-feed/instagram-item-02.jpg';
import instagramItem03 from '../../images/instagram-feed/instagram-item-03.jpg';
import instagramItem04 from '../../images/instagram-feed/instagram-item-04.jpg';
import instagramItem05 from '../../images/instagram-feed/instagram-item-05.jpg';
import instagramItem06 from '../../images/instagram-feed/instagram-item-06.jpg';
import instagramItem07 from '../../images/instagram-feed/instagram-item-07.jpg';

const InstagramFeed = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

          <div>
            <div
              className="instagram-item"
              style={{ backgroundImage: `url(${instagramItem06})` }}
            />
          </div>

          <div>
            <div
              className="instagram-item"
              style={{ backgroundImage: `url(${instagramItem07})` }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InstagramFeed;
