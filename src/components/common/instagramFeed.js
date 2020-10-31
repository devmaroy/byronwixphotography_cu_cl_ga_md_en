import React from 'react';
import instagramItem01 from '../../images/instagram-feed/instagram-item-01.jpg';

const InstagramFeed = () => {
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
        <div
          className="instagram-item"
          style={{ backgroundImage: `url(${instagramItem01})` }}
        />
      </div>
    </div>
  );
};

export default InstagramFeed;
