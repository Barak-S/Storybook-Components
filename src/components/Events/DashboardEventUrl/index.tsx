import { Grid, Link, makeStyles, Theme, useTheme } from '@material-ui/core';
import { Splitter } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';
import { DashboardEventMenu } from '../DashboardEventMenu';

interface Props extends StyleProps {
  url: string;
  onClick?: (url: string) => void;
  onEditClick?: () => void;
  onCloneClick?: () => void;
  onArchiveClick?: () => void;
  onRemoveClick?: () => void;
}

export const DashboardEventUrl: FC<Props> = ({
  url,
  onClick,
  onEditClick,
  onCloneClick,
  onArchiveClick,
  onRemoveClick,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.container}>
      <Link component={'span'} onClick={() => !!onClick && onClick(url)} className={classes.link}>
        {url}
        <LineAwesomeIcon type="external-link-alt" />
      </Link>
      <Splitter style={{ height: 33 }} />
      <DashboardEventMenu
        onEditClick={onEditClick}
        onCloneClick={onCloneClick}
        onArchiveClick={onArchiveClick}
        onRemoveClick={onRemoveClick}
      />
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      [theme.breakpoints.up('md')]: {
        marginBottom: 65,
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: 0,
      },
    },
    link: {
      color: colors.marineBlue,
      cursor: 'pointer',
      marginRight: 8,
      textTransform: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
      '&.MuiLink-root': {
        display: 'flex',
        alignItems: 'center',
        transform: 'translateY(4px)',
        fontSize: 12,
        [theme.breakpoints.up('lg')]: {
          fontSize: 16,
        },
      },
      '& .MuiIcon-root': {
        transform: 'translateY(-2px)',
        fontSize: 16,
        marginLeft: 5,
        [theme.breakpoints.up('lg')]: {
          fontSize: 33,
        },
      },
    },
  })();

export type DashboardEventUrlProps = Props;
export default DashboardEventUrl;
