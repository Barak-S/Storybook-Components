import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { Title } from 'components/Common';
import React, { FC } from 'react';
import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  eventData?: string;
  title?: string;
  subTitle?: string;
  className?: string;
}

export const EventDataTile: FC<Props> = ({ eventData, title, subTitle, style, className }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Paper className={mc(classes.container, className)} style={style}>
      {subTitle ? (
        <Title type="h6" className={classes.subTitle}>
          {subTitle}
        </Title>
      ) : (
        eventData && (
          <Title type="h2" className={classes.eventData}>
            {eventData}
          </Title>
        )
      )}
      <Title type="h5" className={classes.eventTitle}>
        {title}
      </Title>
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      height: 138,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: colors.white,
      borderRadius: 12,
      padding: '0 26px',
      paddingBottom: 24,
      paddingTop: 30,
      boxShadow: '0px 0px 30px #AAAAAA40',
      [theme.breakpoints.down('md')]: {
        margin: '0 5px',
        marginTop: 14,
      },
      [theme.breakpoints.down('sm')]: {
        height: 89,
        margin: '7px 0px',
        paddingBottom: 11.5,
        paddingTop: 11,
      },
    },
    eventData: {
      color: colors.marineBlue,
      fontSize: 48,
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: 37,
      },
    },
    eventTitle: {
      color: colors.coolBlue,
      fontSize: 16,
      fontWeight: 500,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 17,
      fontWeight: 400,
      color: colors.greyish,
      paddingTop: 11,
      fontStyle: 'italic',
      textAlign: 'center',
    },
  })();

export type EventDataTileProps = Props;
export default EventDataTile;
