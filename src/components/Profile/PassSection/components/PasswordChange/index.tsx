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
        <span className={classes.title}>{'Change Your Password'}</span>
        <span className={classes.subtitle}>
          {'Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'}
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
