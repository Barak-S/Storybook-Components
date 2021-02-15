import React, { FC } from 'react';
import { isArray, isNumber } from 'lodash';
import { m, px, Style } from 'styles';
import { TitleProps } from './types';
import Heading from './components/Heading';

export const Title: FC<TitleProps> = ({ className, type, style, size, children, color, bold, content }) => {
  const getSizeStyle = (): Style | undefined => {
    if (!size) {
      return undefined;
    }
    if (isNumber(size)) {
      return { fontSize: px(size) };
    }
    return { fontSize: size };
  };

  const finalStyle = m(
    getSizeStyle(),
    color ? { color } : undefined,
    bold ? { fontWeight: 'bold' } : undefined,
    isArray(style) ? m(...style) : style,
  );

  return (
    <Heading type={type} className={className} style={finalStyle}>
      {content || children}
    </Heading>
  );
};

export default Title;
