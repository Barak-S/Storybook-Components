import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style } from 'styles';

import EventActivity from './components/EventActivity';
import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfileFormSettingsSection: FC<Props> = ({ style }) => {
  const classes = useStyles();
  return (
    <View style={style} className={classes.contact}>
      <EventActivity />
      <View row className={classes.wrapBtn}>
        <ContainedButton className={classes.btn}>{'SAVE'}</ContainedButton>
      </View>
    </View>
  );
};

export default ProfileFormSettingsSection;
