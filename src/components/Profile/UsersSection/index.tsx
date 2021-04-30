import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';
import { makeStyles } from '@material-ui/core';
import ProfileSectionFooter from '../SectionFooter';
import EditUserRoles from './components/EditUserRoles';

type Props = StyleProps;

export const ProfileUsersSection: FC<Props> = () => {
  const classes = useStyles();

  return (
    <View className={classes.container}>
      <EditUserRoles />
      <ProfileSectionFooter disabled />
    </View>
  );
};

const useStyles = () =>
  makeStyles(() => ({
    container: {
      marginBottom: 37,
    },
  }))();

export type ProfileUsersSectionProps = Props;
export default ProfileUsersSection;
