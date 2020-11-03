import React from 'react';
import PropTypes from 'prop-types';

const SubpageHeader = ({ heading, children }) => {
  return (
    <div className="subpage-header">
      <h1 className="subpage-header__heading">{heading}</h1>

      <div className="subpage-header__text">{children}</div>
    </div>
  );
};

SubpageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SubpageHeader;
