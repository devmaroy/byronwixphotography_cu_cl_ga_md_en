import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ icon, children }) => {
  return (
    <div className="service">
      <div className="service__icon">
        <FontAwesomeIcon icon={['fal', icon]} fixedWidth />
      </div>

      <div
        className="service__text"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </div>
  );
};

Service.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Service;
