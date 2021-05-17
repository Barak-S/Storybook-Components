import { Grid, makeStyles, Theme, Divider } from '@material-ui/core';
import { View } from 'components/Common';
import { FormControlSection, FormSocialsInput } from 'components/Form';
import { User, UserUpdate } from 'core/api';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import ProfileSectionFooter from '../SectionFooter';
import BioSection from './components/BioSection';
import CompanySection from './components/CompanySection';
import ImageSection from './components/ImageSection';
import { UserUpdateFormErrs as FormErrs } from 'screens/Dashboard/Profile';

interface Props extends StyleProps {
  profile: User;
  data?: UserUpdate;
  errors?: FormErrs;
  processing?: boolean;
  disabled?: boolean;
  thumbProcessing?: boolean;
  onChange?: (val: UserUpdate) => void;
  onThumbFileSelect?: (val: File) => void;
  onSubmit?: () => void;
}

export const ProfileAccountSection: FC<Props> = ({
  style,
  processing,
  disabled,
  thumbProcessing,
  data,
  profile,
  errors,
  onChange,
  onSubmit,
  onThumbFileSelect,
}) => {
  const classes = useStyles();

  return (
    <View style={style} className={classes.contact}>
      <Grid container className={classes.container}>
        <div className={classes.mobileDirection}>
          <div className={classes.imgSection}>
            <ImageSection user={profile} processing={thumbProcessing} onFileSelect={onThumbFileSelect} />
          </div>

          <div className={classes.headerSection}>
            <View className={classes.heading}>
              <span className={classes.title}>{'Contact Information'}</span>
              <span className={classes.subtitle}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
              </span>
            </View>
          </div>
        </div>

        <div className={classes.profileSection}>
          <CompanySection data={data} errors={errors} profile={profile} onChange={onChange} />
          <FormControlSection
            title="Social Media Profiles"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
            borderTop={false}
          >
            <FormSocialsInput items={data?.socials} onChange={socials => onChange && onChange({ ...data, socials })} />
          </FormControlSection>
          <Divider style={{ marginTop: 10, marginBottom: 40 }} />
          <BioSection data={data} onChange={onChange} />
          <ProfileSectionFooter processing={processing} disabled={disabled} style={styles.btn} onSaveClick={onSubmit} />
        </div>
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
      display: 'flex',
    },
    contact: {
      width: '-webkit-fill-available',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    heading: {
      paddingLeft: 10,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
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
    imgSection: {
      marginLeft: 10,
      width: 212,
      minWidth: 212,
      minHeight: '100%',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        marginBottom: 25,
        marginTop: 15,
        paddingLeft: 0,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: '100%',
        minWidth: '100%',
        justifyContent: 'center',
      },
    },
    headerSection: {
      maxWidth: 744,
      height: 55,
      paddingTop: 6,
    },
    profileSection: {
      width: '100%',
      marginLeft: 222,
      marginTop: '-100px',
      paddingLeft: 10,
      paddingRight: 20,
      [theme.breakpoints.down('md')]: {
        marginTop: '-130px',
        paddingRight: 0,
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 37,
      },
    },
    mobileDirection: {
      display: 'flex',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        marginTop: 'auto',
      },
    },
  }))();

export type ProfileAccountSectionProps = Props;
export default ProfileAccountSection;
