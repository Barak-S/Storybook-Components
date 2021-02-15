import React, { FC } from 'react';
import { colors, m, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  href?: string;
  target?: string;
  className?: string;
}

export const TextLink: FC<Props> = ({ style, href = '#', target, className, children }) => (
  <a className={className} style={m([styles.container, style])} href={href} target={target}>
    {children}
  </a>
);

const styles: Styles = {
  container: {
    color: colors.link,
    textDecoration: 'none',
  },
};

export type TextLinkProps = Props;
export default TextLink;
