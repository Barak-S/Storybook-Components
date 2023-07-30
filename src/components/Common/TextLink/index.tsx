import React, { FC, MouseEvent } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { getTestIdProps, TestIdProps } from 'utils';

interface Props extends StyleProps, TestIdProps {
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
}

export const TextLink: FC<Props> = ({ testID, style, href = '#', target, className, children, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      className={className}
      style={ms([styles.container, style])}
      href={href}
      target={target}
      onClick={handleClick}
      {...getTestIdProps(testID, 'btn')}
    >
      {children}
    </a>
  );
};

const styles: Styles = {
  container: {
    color: colors.steal,
    textDecoration: 'none',
  },
};

export type TextLinkProps = Props;
export default TextLink;
