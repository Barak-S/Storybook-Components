import { makeStyles, Theme, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style, colors } from 'styles';
import { ContainedButton } from 'components/Buttons';
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
    <View row style={style} className={classes.contact} >
      <Grid container>
        <Grid xs={12} sm={12} md={2} lg={2} className={classes.item1} >
          <ImageSection />
        </Grid>

        <Grid xs={12} sm={12} md={10} lg={10} className={classes.item2} >
          <View className={classes.headerSection}>
            <span className={classes.title}>{'Contact & Company Information'}</span>
            <span className={classes.subtitle}>
              {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
            </span>
          </View>
        </Grid>

        <Grid xs={12} sm={12} md={10} lg={10} className={classes.item3}>          
          <CompanySection />
          <SocialSection />
          <BioSection />
          <View row className={classes.wrapBtn}>
            <ContainedButton className={classes.btn}>{'SAVE'}</ContainedButton>
          </View> 
        </Grid>

      </Grid>
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
    contact: {
      width: '-webkit-fill-available',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    wrapBtn: {
      display: 'flex',
      justifyContent: 'center',
    },
    headerSection: {
      [theme.breakpoints.down('md')]: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px',
      },
    },
    title: {
      letterSpacing: '0px',
      color: colors.marine,
      display: 'block',
      paddingBottom: 9,
    },
    subtitle: {
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
    },
    socialSection:{
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
      },
    },
    item1:{
      order: 1,
      [theme.breakpoints.down('md')]: {
        transform: 'translateX(-22px)'
      },
      [theme.breakpoints.down('sm')]: {
        order: 2,
        transform: 'translateX(0px)'
      },
    },
    item2:{
      height: 55,
      order: 2,
      [theme.breakpoints.down('sm')]: {
        order: 1,
      },
    },
    btn: {
      background: colors.coolBlue,
      borderRadius: '6px',
      width: '166px!important',
      height: '52px',
    },
    item3:{
      order: 3,
      [theme.breakpoints.up('sm')]: {
        marginLeft: 'auto',
        transform: 'translateY(-95px)'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px',
        transform: 'translateY(0px)'
      },
    }
  }))();


export type ProfileAccountSectionProps = Props;
export default ProfileAccountSection;
