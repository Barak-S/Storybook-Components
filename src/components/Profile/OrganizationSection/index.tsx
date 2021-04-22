import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style, Styles } from 'styles';
import ProfileSectionFooter from '../SectionFooter';
import ProfileOrganization from './components/OrganizationChange';

interface Props {
  style?: Style;
}

export const ProfileOrganizationSection: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <View style={style} className={classes.container}>
      <ProfileOrganization />
      <ProfileSectionFooter style={styles.btn} />
    </View>
  );
};

const styles: Styles = {
  btn: {
    letterSpacing: '2.25px',
  },
};

const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      width: '-webkit-fill-available',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        marginBottom: 37,
      },
    },
  }))();

export type ProfileOrganizationSectionProps = Props;
export default ProfileOrganizationSection;
