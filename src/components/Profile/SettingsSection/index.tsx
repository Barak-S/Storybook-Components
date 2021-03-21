import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style } from 'styles';

import ProfileSectionFooter from '../SectionFooter';
import EventActivity from './components/EventActivity';

interface Props {
  style?: Style;
}

export const ProfileSettingsSection: FC<Props> = ({ style }) => {
  const classes = useStyles();
  return (
    <View style={style} className={classes.container}>
      <EventActivity />
      <ProfileSectionFooter />
    </View>
  );
};

const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      width: '-webkit-fill-available',
      display: 'flex',
      marginBottom: '37px',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  }))();

export type ProfileSettingsSectionProps = Props;
export default ProfileSettingsSection;
