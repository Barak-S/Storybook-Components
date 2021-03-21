import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style } from 'styles';

import ProfileSectionFooter from '../SectionFooter';
import BioSection from './components/BioSection';
import CompanySection from './components/CompanySection';
import ImageSection from './components/ImageSection';
import SocialSection from './components/SocialSection';

interface Props {
  style?: Style;
}

export const ProfileAccountSection: FC<Props> = ({ style }) => {
  const classes = useStyles();
  return (
    <View row style={style} className={classes.container}>
      <ImageSection />
      <View column>
        <CompanySection />
        <SocialSection />
        <BioSection />
        <ProfileSectionFooter />
      </View>
    </View>
  );
};

const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      marginBottom: '37px',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  }))();

export type ProfileAccountSectionProps = Props;
export default ProfileAccountSection;
