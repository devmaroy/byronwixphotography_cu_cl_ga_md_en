import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon, type = 'normal', fixedWidth = true }) => {
  const socialIcon = icon.toLowerCase();

  const squareIcons = {
    facebook: 'facebook-square',
    twitter: 'twitter-square',
    linkedin: 'linkedin',
    youtube: 'youtube-square',
    instagram: 'instagram',
    dribbble: 'dribbble-square',
  };

  const normalIcons = {
    facebook: 'facebook-f',
    twitter: 'twitter',
    linkedin: 'linkedin-in',
    youtube: 'youtube',
    instagram: 'instagram',
    dribbble: 'dribbble',
  };

  const renderIcon = (typeToRender) => {
    switch (typeToRender) {
      case 'square':
        return (
          <FontAwesomeIcon
            icon={['fab', squareIcons[socialIcon]]}
            fixedWidth={fixedWidth}
          />
        );
      default:
        return (
          <FontAwesomeIcon
            icon={['fab', normalIcons[socialIcon]]}
            fixedWidth={fixedWidth}
          />
        );
    }
  };

  return renderIcon(type);
};

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
  fixedWidth: PropTypes.bool,
};

export default SocialIcon;
