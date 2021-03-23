import { Grid, Link, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { Image } from 'components/Common';
import { EventStatus } from 'components/Events/types';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { colors, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  source: string;
  status: EventStatus;
  onEditClick?: () => void;
  onCopyClick?: () => void;
}

export const DashboardEventImage: FC<Props> = ({ source, status, onEditClick, onCopyClick }) => {
  const [hover, setHover] = useState<boolean>(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const isEventSetup = status === 'event-setup';

  return (
    <div className={classes.container} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {source && <Image source={source} className={classes.image} />}
      {isEventSetup && (
        <Grid className={classes.overlay}>
          <ContainedButton
            size="small"
            color="red"
            className={classes.editBtn}
            endIcon="chevron-circle-right"
            onClick={onEditClick}
          >
            {'review & update'}
          </ContainedButton>
        </Grid>
      )}
      {!isEventSetup && hover && (
        <Grid className={classes.overlay}>
          <Link component="span" className={classes.copyBtn} onClick={onCopyClick}>
            <LineAwesomeIcon type="external-link-alt" size={64} />
          </Link>
        </Grid>
      )}
    </div>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      width: '100%',
      position: 'relative',
      background: colors.white,
      borderRadius: 14,
      overflow: 'hidden',
      paddingTop: 185,
      '&:before': {
        content: '"IMAGE"',
        ...mx.overlay(),
        ...mx.centeredContent(),
        fontWeight: 500,
        fontSize: 20,
        color: colors.coolGrey,
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: 189,
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: 307,
      },
    },
    image: {
      ...mx.overlay(),
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      ...mx.overlay(),
      ...mx.centeredContent(),
      width: '100%',
      background: colors.withAlpha(colors.black, 0.3),
    },
    copyBtn: {
      color: colors.coolBlue,
      cursor: 'pointer',
      ...mx.overlay(),
      ...mx.centeredContent(),
      width: '100%',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    editBtn: {
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: 220,
    },
  })();

export default DashboardEventImage;
