import Divider from '@material-ui/core/Divider';
import { View } from 'components/Common';
import { FormPasswordInput } from 'components/Form';
import React, { FC } from 'react';
import { Style } from 'styles';

import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfilePassSectionPasswordChange: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <View style={style} className={classes.passSection}>
      <View className={classes.headerSection}>
        <span className={classes.title}>{'Bio'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </View>
      <View className={classes.blockInf}>
        <View className={classes.oldPass}>
          <FormPasswordInput visible placeholder="Current Password" />
        </View>
        <View className={classes.newPass}>
          <FormPasswordInput visible placeholder="Password" />
        </View>
        <FormPasswordInput visible placeholder="Confirm Password" />
      </View>
      <Divider />
    </View>
  );
};

export type ProfilePassSectionPasswordChangeProps = Props;
export default ProfilePassSectionPasswordChange;
