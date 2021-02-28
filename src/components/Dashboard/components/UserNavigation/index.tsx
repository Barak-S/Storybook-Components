import { Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { ContactIcon, EventIcon, FaqIcon, ProfileIcon, SupportIcon } from 'components/Icons';
import React, { FC, useEffect, useState } from 'react';
import { StyleProps } from 'styles';
import DashboardButton from './components/Button';

interface Props extends StyleProps {
  emailConfirmed?: boolean;
}

export const DashboardUsernavigation: FC<Props> = ({ emailConfirmed = false }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setIsMobile(matches);
  }, [matches, setIsMobile]);

  const classes = useStyles(theme);

  return (
    <Grid container className={classes.container}>
      {!isMobile && (
        <DashboardButton icon={<EventIcon />} onClick={e => e.preventDefault()} disabled={!emailConfirmed}>
          {'Add Event'}
        </DashboardButton>
      )}
      <DashboardButton icon={<ProfileIcon />} onClick={e => e.preventDefault()}>
        {'Update Profile'}
      </DashboardButton>
      <DashboardButton icon={<FaqIcon />} onClick={e => e.preventDefault()}>
        {'FAQ'}
      </DashboardButton>
      <DashboardButton icon={<SupportIcon />} onClick={e => e.preventDefault()}>
        {'Support'}
      </DashboardButton>
      <DashboardButton icon={<ContactIcon />} onClick={e => e.preventDefault()}>
        {'ContactUs'}
      </DashboardButton>
    </Grid>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      position: 'absolute',
      bottom: 26,
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        position: 'initial',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    },
  })();

export default DashboardUsernavigation;
