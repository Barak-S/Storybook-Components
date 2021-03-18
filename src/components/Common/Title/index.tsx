import React, { FC } from 'react';
import { isArray, isNumber } from 'lodash';
import { ms, px, Style, StyleProps } from 'styles';
import TitleHeading, { TitleHeadingType } from './components/Heading';

interface Props extends StyleProps {
  className?: string;
  size?: number | string;
  bold?: boolean;
  color?: string;
  content?: string;
  type?: TitleHeadingType;
}

export const Title: FC<Props> = ({ className, type, style, size, children, color, bold, content }) => {
  const getSizeStyle = (): Style | undefined => {
    if (!size) {
      return undefined;
    }
    if (isNumber(size)) {
      return { fontSize: px(size) };
    }
    return { fontSize: size };
  };

  const finalStyle = ms(
    getSizeStyle(),
    color ? { color } : undefined,
    bold ? { fontWeight: 'bold' } : undefined,
    isArray(style) ? ms(...style) : style,
  );

  return (
    <TitleHeading type={type} className={className} style={finalStyle}>
      {content || children}
    </TitleHeading>
  );
};

export type TitleProps = Props;
export default Title;
