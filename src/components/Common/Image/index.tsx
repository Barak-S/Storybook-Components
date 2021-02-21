import React, { FC } from 'react';
import { m, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  source?: string;
  className?: string;
}

export const Image: FC<Props> = ({ style, source, className }) => {
  return <img className={className} style={m(styles.container, style)} src={source} />;
};

const styles: Styles = {
  container: {
    display: 'block',
  },
};

export type ImageProps = Props;
export default Image;
