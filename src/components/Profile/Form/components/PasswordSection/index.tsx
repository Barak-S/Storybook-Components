import React, { FC } from 'react';

import { useStyles } from './styles';

import PasswordChange from './components/PasswordChange';
import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import { Style } from 'styles';

interface Props {
  style?: Style;
}

export const ProfileFormPasswordSection: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <View style={style} className={classes.contact}>
      <PasswordChange />
      <View row className={classes.wrapBtn}>
        <ContainedButton className={classes.btn}>{'SAVE'}</ContainedButton>
      </View>
    </View>
  );
};

export type ProfileFormPasswordSectionProps = Props;
export default ProfileFormPasswordSection;
