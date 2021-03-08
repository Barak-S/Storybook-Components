import { Grid, makeStyles, Menu, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, MouseEvent } from 'react';

import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  anchor?: HTMLAnchorElement;
  open: boolean;
  onToggle: (e: MouseEvent<HTMLAnchorElement>) => void;
  onClose: () => void;
  className?: string;
}

export const Dropdown: FC<Props> = ({ anchor = undefined, open, onClose, onToggle, className, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const iconType: LineAwesomeIconType = !!anchor ? 'angle-up' : 'angle-down';

  return (
    <Grid className={classes.container}>
      <a href="#" onClick={onToggle} className={classes.anchor}>
        <LineAwesomeIcon type={iconType} />
      </a>
      <Menu
        anchorEl={anchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={onClose}
        className={mc(classes.dropdown, className)}
      >
        <Grid onClick={onClose}>{children}</Grid>
      </Menu>
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
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
      '& .MuiIcon-root': {
        fontSize: 16,
        [theme.breakpoints.up('lg')]: {
          fontSize: 24,
        },
      },
    },
  })();

export default Dropdown;
