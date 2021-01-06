import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import serviceType from '../../../types/components/pages/services/serviceType';

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
  ...serviceType,
};

export default Service;
