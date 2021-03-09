import React, { FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  source?: string;
  className?: string;
}

export const Image: FC<Props> = ({ style, source, className }) => {
  return <img className={className} style={ms(styles.container, style)} src={source} />;
};

const styles: Styles = {
  container: {
    display: 'block',
  },
};

export type ImageProps = Props;
export default Image;
