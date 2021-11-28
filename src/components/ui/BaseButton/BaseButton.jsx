import React from 'react';

import './base-button.css';

const BaseButton = ({children, ...props}) => {
  const className = props.className ? props.className : '';

  return (
    <button {...props} className={`base-button ${className}`}>
      {children}
    </button>
  );
};

export default BaseButton;
