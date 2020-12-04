import React from 'react';
import PropTypes from 'prop-types';

const SubpageHeader = ({
  heading,
  subheading = '',
  showDescription = true,
  children,
}) => {
  return (
    <div className="subpage-header">
      <h1 className="subpage-header__heading">{heading}</h1>

      {subheading && (
        <h2 className="subpage-header__subheading">{subheading}</h2>
      )}

      {showDescription && (
        <div
          className="subpage-header__text"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: children }}
        />
      )}
    </div>
  );
};

SubpageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  showDescription: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SubpageHeader;
