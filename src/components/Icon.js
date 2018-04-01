import React from 'react';
import PT from 'prop-types';

const Icon = props => {
  const classFinder = {
    football: 'futbol',
    cooking: 'utensils',
    coding: 'code'
  };

  const iconName = classFinder[props.topic];
  return <i className={`fas fa-${iconName} icon is-medium`} />;
};

Icon.propTypes = {
  topic: PT.string.isRequired
};

export default Icon;
