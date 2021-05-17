import { Icon } from '@material-ui/core';
import React, { FC, Ref } from 'react';
import { mc, ms, StyleProps } from 'styles';

import { LineAwesomeIconType } from './types';

interface Props extends StyleProps {
  type: LineAwesomeIconType;
  color?: string;
  size?: number;
  className?: string;
  forwardRef?: Ref<HTMLDivElement>;
  handleClick?: (value: boolean | string) => void;
}

const getRootClassName = (val: LineAwesomeIconType): string => {
  if (['facebook-f', 'google', 'instagram', 'twitter', 'youtube', 'linkedin'].includes(val)) {
    return 'lab';
  }
  return 'las';
};

export const LineAwesomeIcon: FC<Props> = ({ style, type, color, size, className, forwardRef, handleClick }) => {
  const containerStyle = ms(!!color && { color }, !!size && { fontSize: `${size}px` }, style);

  const handleClickButton = () => {
    if (handleClick) {
      handleClick(false);
    }
  };

  return (
    <Icon
      onClick={handleClickButton}
      ref={forwardRef}
      style={containerStyle}
      className={mc(`${getRootClassName(type)} la-${type}`, className)}
    />
  );
};

export { LineAwesomeIconType } from './types';
export type LineAwesomeIconProps = Props;
export default LineAwesomeIcon;
