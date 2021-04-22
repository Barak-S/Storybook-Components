import Divider from '@material-ui/core/Divider';
import { View } from 'components/Common';
import { FormTextEditor } from 'components/Form';
import { UserUpdate } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import { useStyles } from './styles';

interface Props extends StyleProps {
  data?: UserUpdate;
  onChange?: (val: UserUpdate) => void;
}

export const ProfileAccountBioSection: FC<Props> = ({ style, data, onChange }) => {
  const classes = useStyles();

  const handleChange = (val: string) => {
    onChange && onChange({ bio: val });
  };

  return (
    <View style={style} className={classes.ReaderSection}>
      <View className={classes.headerSection}>
        <span className={classes.title}>{'Bio'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </View>
      <View className={classes.blockInf}>
        <FormTextEditor value={data?.bio || ''} onChange={handleChange} />
      </View>
      <Divider />
    </View>
  );
};

export type ProfileAccountBioSectionProps = Props;
export default ProfileAccountBioSection;
