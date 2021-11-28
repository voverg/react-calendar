import React from 'react';

import './base-input.css';

const BaseInput = ({className, ...props}) => {
  const inputClassName = className ? className : '';

  return (
    <input
      {...props}
      className={`base-input ${inputClassName}`}
    />
  );
};

export default BaseInput;
