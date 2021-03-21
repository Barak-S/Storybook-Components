import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style } from 'styles';

import ProfileSectionFooter from '../SectionFooter';
import PasswordChange from './components/PasswordChange';

interface Props {
  style?: Style;
}

export const ProfilePassSection: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <View style={style} className={classes.container}>
      <PasswordChange />
      <ProfileSectionFooter />
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

export type ProfilePassSectionProps = Props;
export default ProfilePassSection;
