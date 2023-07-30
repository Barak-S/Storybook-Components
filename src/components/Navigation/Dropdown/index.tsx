import { Grid, makeStyles, Menu } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, MouseEvent, MutableRefObject, ReactNode, useEffect, useRef } from 'react';

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

const useEventsAwayDropdown = (ref: MutableRefObject<ReactNode>, handleClick: () => void): void => {
  useEffect(() => {
    const handleClickOutsideComponent: EventListener = (event): void => {
      if (ref.current && ref.current !== event.target) {
        handleClick();
      }
    };

    const events = ['mousedown', 'touchstart', 'touchmove', 'scroll'];
    events.forEach(event => document.addEventListener(event, handleClickOutsideComponent));

    return () => {
      events.forEach(event => document.removeEventListener(event, handleClickOutsideComponent));
    };
  }, [ref]);
};

export const Dropdown: FC<Props> = ({ style, icon, anchor = undefined, open, onClose, onToggle, classes, children }) => {
  const styleClasses = useStyles();
  const iconType: LineAwesomeIconType = !!anchor ? 'angle-up' : 'angle-down';
  const menuRef = useRef(null);

  useEventsAwayDropdown(menuRef, onClose);

  return (
    <Grid style={style} className={mc(styleClasses.container, classes?.container)}>
      <a ref={menuRef} href="#" onClick={onToggle} className={mc(styleClasses.anchor, classes?.anchor)}>
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
    color: colors.steal,
  },
});

export default Dropdown;
