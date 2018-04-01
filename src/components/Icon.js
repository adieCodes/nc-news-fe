import React from 'react';
import PT from 'prop-types';

const Icon = props => {
  const classFinder = {
    football: 'futbol',
    cooking: 'utensils',
    coding: 'code'
  };

  const iconName = classFinder[props.iconName];
  return <i className={`fas fa-${iconName} icon is-large topic-image`} />;
};

Icon.propTypes = {
  iconName: PT.string.isRequired
};

export default Icon;
