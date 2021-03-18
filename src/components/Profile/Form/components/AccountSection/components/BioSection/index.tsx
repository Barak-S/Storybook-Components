import Divider from '@material-ui/core/Divider';
import { View } from 'components/Common';
import TextReader from 'components/Form/TextEditor';
import React, { FC } from 'react';
import { Style } from 'styles';

import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfileFormAccountSectionBioSection: FC<Props> = ({ style }) => {
  const classes = useStyles();
  return (
    <View style={style} className={classes.ReaderSection}>
      <View className={classes.headerSection}>
        <span className={classes.title}>{'Bio'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </View>
      <View className={classes.blockInf}>
        <TextReader />
      </View>
      <Divider />
    </View>
  );
};

export default ProfileFormAccountSectionBioSection;
