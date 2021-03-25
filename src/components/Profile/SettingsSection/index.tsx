import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import { AccountProfilePatch } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import ProfileSectionFooter from '../SectionFooter';
import EventActivity from './components/EventActivity';

interface Props extends StyleProps {
  data?: AccountProfilePatch;
  processing?: boolean;
  onChange?: (val: AccountProfilePatch) => void;
  onSubmit?: () => void;
}

export const ProfileSettingsSection: FC<Props> = ({ style, data, processing, onChange, onSubmit }) => {
  const classes = useStyles();
  return (
    <View style={style} className={classes.container}>
      <EventActivity data={data} onChange={onChange} />
      <ProfileSectionFooter processing={processing} disabled={processing} onSaveClick={onSubmit} />
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
