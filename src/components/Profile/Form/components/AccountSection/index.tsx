import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style } from 'styles';

import BioSection from './components/BioSection';
import CompanySection from './components/CompanySection';
import ImageSection from './components/ImageSection';
import SocialSection from './components/SocialSection';
import { useStyles } from './styles';

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

export type ProfileFormAccountSectionProps = Props;
export default ProfileFormAccountSection;
