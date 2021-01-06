import React from 'react';
import customCheckboxType from '../../types/components/common/customCheckboxType';

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
  ...customCheckboxType,
};

export default CustomCheckbox;
