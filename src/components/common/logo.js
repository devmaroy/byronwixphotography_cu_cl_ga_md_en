import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import logoType from '../../types/components/common/logoType';

// Query
const query = graphql`
  query LogoQuery {
    logo: allSite {
      nodes {
        siteMetadata {
          titleSimplified
          titleSimplifiedHighlight
        }
      }
    }
  }
`;

const Logo = ({ alt = false }) => {
  const data = useStaticQuery(query);
  const logoData = data.logo.nodes[0].siteMetadata;
  const { titleSimplified, titleSimplifiedHighlight } = logoData;

  return (
    <div className={classNames('logo', { 'logo--alt': alt })}>
      <Link
        to="/"
        className={classNames('logo__link', {
          'logo__link--alt': alt,
        })}
      >
        {titleSimplified}{' '}
        <span className="logo__highlight">{titleSimplifiedHighlight}</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  ...logoType,
};

export default Logo;
