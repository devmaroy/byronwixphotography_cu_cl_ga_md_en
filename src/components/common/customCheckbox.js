import React from 'react';
import PropTypes from 'prop-types';

const CustomCheckbox = ({
  id = 'acceptedTerms',
  name = 'acceptedTerms',
  children,
}) => {
  return (
    <div className="custom-checkbox">
      <label htmlFor="acceptedTerms" className="custom-checkbox__label">
        <input
          type="checkbox"
          id={id}
          name={name}
          className="custom-checkbox__control"
        />

        <span className="custom-checkbox__field" />

        <div
          className="custom-checkbox__text"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </label>
    </div>
  );
};

CustomCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CustomCheckbox;
