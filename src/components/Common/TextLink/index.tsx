import React, { FC, MouseEvent } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
}

export const TextLink: FC<Props> = ({ style, href = '#', target, className, children, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a className={className} style={ms([styles.container, style])} href={href} target={target} onClick={handleClick}>
      {children}
    </a>
  );
};

const styles: Styles = {
  container: {
    color: colors.link,
    textDecoration: 'none',
  },
};

export type TextLinkProps = Props;
export default TextLink;
