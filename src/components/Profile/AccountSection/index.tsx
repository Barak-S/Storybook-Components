import { Grid, makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import { User, UserUpdate } from 'core/api';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';

import ProfileSectionFooter from '../SectionFooter';
import BioSection from './components/BioSection';
import CompanySection from './components/CompanySection';
import ImageSection from './components/ImageSection';
import SocialSection from './components/SocialSection';

interface Props extends StyleProps {
  profile: User;
  data?: UserUpdate;
  processing?: boolean;
  onChange?: (val: UserUpdate) => void;
  onSubmit?: () => void;
}

export const ProfileAccountSection: FC<Props> = ({ style, processing, data, profile, onChange, onSubmit }) => {
  const classes = useStyles();
  return (
    <View row style={style} className={classes.contact}>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2} className={classes.item1}>
          <ImageSection />
        </Grid>

        <Grid item xs={12} sm={12} md={10} lg={10} className={classes.item2}>
          <View className={classes.headerSection}>
            <span className={classes.title}>{'Contact Information'}</span>
            <span className={classes.subtitle}>
              {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
            </span>
          </View>
        </Grid>

        <Grid item xs={12} sm={12} md={10} lg={10} className={classes.item3}>
          <CompanySection data={data} profile={profile} onChange={onChange} />
          <SocialSection />
          <BioSection data={data} onChange={onChange} />
          <ProfileSectionFooter processing={processing} disabled={processing} style={styles.btn} onSaveClick={onSubmit} />
        </Grid>
      </Grid>
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
      marginBottom: '37px',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    contact: {
      width: '-webkit-fill-available',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    headerSection: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0px',
      },
    },
    title: {
      letterSpacing: '0px',
      color: colors.marine,
      display: 'block',
      paddingBottom: 6,
      fontWeight: 500,
    },
    subtitle: {
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    socialSection: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
      },
    },
    item1: {
      order: 1,
      justifyContent: 'center',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        marginBottom: 35,
      },
      [theme.breakpoints.down('sm')]: {
        order: 2,
      },
    },
    item2: {
      height: 55,
      order: 2,
      paddingTop: 6,
      [theme.breakpoints.down('sm')]: {
        order: 1,
      },
    },
    item3: {
      order: 3,
      marginLeft: 'auto',
      marginTop: '-120px',
      [theme.breakpoints.down('md')]: {
        marginTop: '-150px',
        paddingLeft: 20,
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        marginLeft: '0px',
        marginTop: '0px',
      },
    },
  }))();

export type ProfileAccountSectionProps = Props;
export default ProfileAccountSection;
