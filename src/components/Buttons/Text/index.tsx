import React, { FC, MouseEvent } from 'react';
import { colors, ms, ClassNameProps, StyleProps, Styles, useHover } from 'styles';

interface Props extends StyleProps, ClassNameProps {
  size?: number;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const TextButton: FC<Props> = ({ className, style, children, href, disabled, size = 14, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      return;
    }
    if (!href && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const { hover, hoverProps } = useHover();
  const styles = getStyles(size);

  return (
    <a
      className={className}
      style={ms(styles.container, disabled && styles.disabled, hover && styles.hover, style)}
      href={href}
      onClick={handleClick}
      {...hoverProps}
    >
      {children}
    </a>
  );
};

const getStyles = (size: number): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.coolBlueTwo,
    boxSizing: 'border-box',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',
    fontSize: `${size}px`,
  },
  hover: {
    textDecoration: 'underline',
  },
  disabled: {
    color: colors.greyish,
    cursor: 'not-allowed',
    textDecoration: 'none',
  },
});

export type TextButtonProps = Props;
export default TextButton;
