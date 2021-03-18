import React, { FC } from 'react';

import { useStyles } from './styles';

import ImageSection from './components/ImageSection';
import CompanySection from './components/CompanySection';
import SocialSection from './components/SocialSection';
import BioSection from './components/BioSection';
import { ContainedButton } from 'components/Buttons';
import { Style } from 'styles';
import { View } from 'components/Common';

interface Props {
  style?: Style;
}

export const ProfileFormAccountSection: FC<Props> = ({ style }) => {
  const classes = useStyles();
  return (
    <View row style={style} className={classes.contact}>
      <ImageSection />
      <View column>
        <CompanySection />
        <SocialSection />
        <BioSection />
        <View row className={classes.wrapBtn}>
          <ContainedButton className={classes.btn}>{'SAVE'}</ContainedButton>
        </View>
      </View>
    </View>
  );
};

export default ProfileFormAccountSection;
