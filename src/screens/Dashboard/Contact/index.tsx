import { ScreenTitle, View, Title } from 'components/Common';
import { makeStyles, Paper, Theme, useTheme, Grid } from '@material-ui/core';
import { DashboardScreenContainer } from 'components/Dashboard';
import React, { FC, useState, ChangeEvent } from 'react';
import { colors, StyleProps, globalStyles } from 'styles';
import { FormTextArea, FormTextInput } from 'components/Form';
import { validators } from 'utils';
import { ContainedButton } from 'components/Buttons';

type Props = StyleProps;

interface FormData {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  message?: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { request?: string };

export const DashboardContactScreen: FC<Props> = () => {

  const [data, setData] = useState<FormData>({ email: '', firstName: '', lastName: '', phoneNumber: '', message: '' });
  const [errs, setErrs] = useState<FormErrs | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);

  const { email, firstName, lastName, phoneNumber, message } = data;

  const theme = useTheme();
  const classes = useStyles(theme);

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrs(undefined);
    setData({ ...data, [key]: event.currentTarget.value });
  };

  const submit = () => {
    setProcessing(true)
  };

  return (
    <>
      <ScreenTitle title="Contact Us" />
      <DashboardScreenContainer style={{ minHeight: '100vh', backgroundColor: colors.darkIndigo, alignItems: 'center' }}>
        <Paper className={classes.container}>
          <Grid container justify="space-between" spacing={2}>
            <Grid sm={12} lg={5}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Title type="h3" className={classes.primaryHeader}>
                  {'Contact Us'}
                </Title>
              </Grid>
              <Grid container className={classes.headerSection}>
                <Grid xs={12} sm={12} md={6} lg={12} className={classes.colRight}>
                  <p className={classes.listText}>
                    {
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor s, consectetur adipiscing elitsed.'
                    }
                  </p>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={12}>
                  <p className={classes.phoneNumber}>{'800-477-7469'}</p>
                  <p className={classes.subText}>
                    {'Interested in employment opportunities at WorldStage'}{' '}
                    <a href="#" className={classes.link}>
                      {'Click Here'}
                    </a>
                  </p>
                </Grid>
              </Grid>
            </Grid>

            <Grid container sm={12} xs={12} lg={7} className={classes.contactForm}>
              <Grid item xs={12} sm={12} lg={12}>
                <Title type="h3" className={classes.secondaryHeader}>
                  {'Get In Touch'}
                </Title>
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <FormTextInput
                  value={firstName || ''}
                  type="text"
                  error={!!errs?.firstName}
                  helperText={errs?.firstName}
                  InputProps={{ inputProps: { maxLength: 50 } }}
                  label="First Name"
                  onChange={handleTextFieldChanged('firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <FormTextInput
                  value={lastName || ''}
                  type="text"
                  error={!!errs?.lastName}
                  helperText={errs?.lastName}
                  InputProps={{ inputProps: { maxLength: 50 } }}
                  label="Last Name"
                  onChange={handleTextFieldChanged('lastName')}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <FormTextInput
                  value={email || ''}
                  type="email"
                  valid={!validators.getEmailErr(email)}
                  error={!!errs?.email}
                  helperText={errs?.email}
                  InputProps={{ inputProps: { maxLength: 50 } }}
                  label="Email"
                  onChange={handleTextFieldChanged('email')}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <FormTextInput
                  value={phoneNumber || ''}
                  type="text"
                  error={!!errs?.phoneNumber}
                  helperText={errs?.phoneNumber}
                  InputProps={{ inputProps: { maxLength: 50 } }}
                  label="Phone Number"
                  onChange={handleTextFieldChanged('phoneNumber')}
                />
              </Grid>
              <Grid item xs={12} style={globalStyles.inputItem}>
                <View>
                  <FormTextArea 
                    label="A Brief Message"
                    onChange={handleTextFieldChanged('message')} 
                    value={message || ''}
                  />
                </View>
              </Grid>
              <Grid item xs={12}>
                {errs && (
                  <Title className={classes.errors} type="h3">
                    {'All Required Fields(*)'}
                  </Title>
                )}
              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} sm={12} className={classes.submit}>
                  <ContainedButton processing={processing} disabled={processing} onClick={submit}>
                    {'SEND MESSAGE'}
                  </ContainedButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </DashboardScreenContainer>
    </>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      margin: '55px 35px',
      padding: '45px 80px',
      borderRadius: 20,
      width: '100%',
      position: 'relative',
      maxWidth: '82.5%',
      lineHeight: 1.3,
      display: 'flex',

      [theme.breakpoints.down('md')]: {
        padding: '45px 20px',
      },
      [theme.breakpoints.down('lg')]: {
        borderRadius: 35,
      },
    },
    headerSection:{
      display: 'inline',
      lineHeight: 1.4,
      paddingRight: 180,
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      [theme.breakpoints.down('lg')]: {
        paddingRight: 30,
      },      
    },
    submit:{
      display: 'felx !important',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 20,
    },
    primaryHeader: {
      fontWeight: 500,
      color: colors.warmPurple,
      fontSize: 30,
      marginBottom: 5,
      paddingLeft: 6,
    },
    secondaryHeader: {
      paddingLeft: 6,
      fontWeight: 500,
      color: colors.marineBlue,
      fontSize: 16,
      marginBottom: 5,
    },
    contactForm:{
      [theme.breakpoints.down('sm')]: {
        marginTop: 85,
      },
    },
    fields: {
      width: '100%',
      maxWidth: '100%',
      marginBottom: 29,

      [theme.breakpoints.up('sm')]: {
        maxWidth: 423,
      },
    },
    formTitle: {
      textTransform: 'capitalize',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 30,
      fontWeight: 500,
      color: colors.marineBlue,
    },
    listText: {
      color: colors.brownishGrey,
      paddingBottom: 10,
      paddingTop: 10,
    },
    colRight: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: 25,
      paddingLeft: 6,
      marginBottom: 20,
    },
    phoneNumber: {
      color: colors.coolBlue,
      paddingTop: 10,
      paddingLeft:6,
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: 55,
      },
    },
    subText: {
      color: colors.coolBlue,
      paddingTop: 10,
      paddingLeft: 6,
      [theme.breakpoints.up('md')]: {
        paddingTop: 4
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: 10,
      },
    },
    link: {
      color: colors.marineBlue,
    },
    errors: {
      color: 'red',
      textAlign: 'right',
      fontWeight: 400,
    },
    splitter: {
      margin: '0 10px',
    },
    copyright: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: 20,
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      '& span': {
        marginBottom: 20,
      },
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',

        '& span': {
          marginBottom: 0,
        },
      },
    },
    footer: {
      color: colors.white,
    },
  })();

export type DashboardContactScreenProps = Props;
export default DashboardContactScreen;
