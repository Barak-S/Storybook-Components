import { Grid, makeStyles, Menu } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, MouseEvent } from 'react';

import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  icon?: LineAwesomeIconType;
  anchor?: HTMLAnchorElement;
  open: boolean;
  onToggle: (e: MouseEvent<HTMLAnchorElement>) => void;
  onClose: () => void;
  classes?: {
    container?: string;
    anchor?: string;
    icon?: string;
    menu?: string;
  };
}

export const Dropdown: FC<Props> = ({ icon, anchor = undefined, open, onClose, onToggle, classes, children }) => {
  const styleClasses = useStyles();
  const iconType: LineAwesomeIconType = !!anchor ? 'angle-up' : 'angle-down';

  return (
    <Grid className={mc(styleClasses.container, classes?.container)}>
      <a href="#" onClick={onToggle} className={mc(styleClasses.anchor, classes?.anchor)}>
        <LineAwesomeIcon type={icon || iconType} className={classes?.icon} />
      </a>
      <Menu
        anchorEl={anchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={onClose}
        className={mc(styleClasses.dropdown, classes?.menu)}
      >
        <Grid onClick={onClose}>{children}</Grid>
      </Menu>
    </Grid>
  );
};

const useStyles = makeStyles({
  container: {},
  dropdown: {
    '& .MuiPaper-rounded': {
      borderRadius: 8,
      position: 'realtive',
      overflow: 'visible',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -20,
        right: 10,
        border: '10px solid transparent',
        borderBottomColor: colors.white,
      },
    },
  },
  anchor: {
    color: colors.marineBlue,
  },
});

export default Dropdown;
