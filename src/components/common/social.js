import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SocialIcon from './socialIcon';

// Query
const query = graphql`
  query Social {
    site {
      siteMetadata {
        socialMedia {
          facebook
          twitter
          instagram
        }
      }
    }
  }
`;

const Social = ({ type = 'normal', fixedWidth = false }) => {
  const data = useStaticQuery(query);
  const socialLinks = data.site.siteMetadata.socialMedia;

  return (
    <ul className="social">
      {Object.entries(socialLinks).map(([name, url]) => (
        <li key={name} className="social__item">
          <a href={url} target="__blank" className="social__link">
            <SocialIcon type={type} icon={name} fixedWidth={fixedWidth} />
          </a>
        </li>
      ))}
    </ul>
  );
};

Social.propTypes = {
  fixedWidth: PropTypes.bool,
  type: PropTypes.string,
};

export default Social;
