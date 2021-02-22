import { Hidden, Icon, IconButton } from '@material-ui/core';
import React, { FC } from 'react';
import { Style, Styles } from 'styles';

interface Props {
  lgHidden?: boolean;
  open: boolean;
  size?: number;
  style?: Style;
  onClick: () => void;
}

export const MobileMenuBtn: FC<Props> = ({ lgHidden = true, open, size = 32, style, onClick }) => {
  const menuButtonIconClassName = open ? 'las la-times' : 'las la-bars';
  const handleToggleMenu = () => {
    onClick();
  };

  return (
    <Hidden lgUp={lgHidden}>
      <IconButton onClick={handleToggleMenu} style={{ width: size, height: size, ...styles.iconButton, ...style }}>
        <Icon style={{ fontSize: size }} className={menuButtonIconClassName} />
      </IconButton>
    </Hidden>
  );
};

const styles: Styles = {
  iconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export type MobileMenuBtnProps = Props;
export default MobileMenuBtn;
