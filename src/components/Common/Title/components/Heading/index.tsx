import React, { FC } from 'react';
import { HeadingProps } from './types';

export const Heading: FC<HeadingProps> = ({ type, style, className, children }) => {
  switch (type) {
    case 'h2':
      return (
        <h2 style={style} className={className}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 style={style} className={className}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 style={style} className={className}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 style={style} className={className}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 style={style} className={className}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 style={style} className={className}>
          {children}
        </h1>
      );
  }
};

export default Heading;
