import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { ms, mc, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  src?: string;
  title?: string;
  className?: string;
}

export const EventImageTile: FC<Props> = ({
  style,
  className,
  title,
  src = 'https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Paper style={ms(styles.container, style)} className={mc(classes.container, className)}>
      <img style={ms(styles.img)} src={src} alt={title || ''} />
    </Paper>
  );
};

const styles: Styles = {
  img: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      maxWidth: 511,
      width: '100%',
      height: 299,
      margin: '0 10px',
      borderRadius: 10,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        margin: '0 10px',
        marginBottom: 7,
      },
      [theme.breakpoints.down('sm')]: {
        height: 189,
      },
    },
  })();

export type EventImageTileProps = Props;
export default EventImageTile;
