import React from 'react';
import subpageHeaderType from '../../types/components/common/subpageHeaderType';

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
  ...subpageHeaderType,
};

export default SubpageHeader;
