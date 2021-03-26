import { Grid, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { Title, View } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import { FormTextArea, FormTextInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import { ScreenFooter, ScreenTitle } from 'components/Screen';
import React, { ChangeEvent, FC, useState } from 'react';
import { colors, globalStyles, StyleProps } from 'styles';
import { validators } from 'utils';

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
    setProcessing(true);
  };

  return (
    <>
      <ScreenTitle title="Contact Us" />
      <DashboardScreenContainer
        style={{ minHeight: '100vh', backgroundColor: colors.darkIndigo, alignItems: 'center', padding: 0 }}
      >
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
                  <View className={classes.getInTouch}>
                    <div className={classes.phoneNumber}>
                      <LineAwesomeIcon type="phone" color={colors.coolBlue} size={35} className={classes.phoneIcon} />
                      <p>{'800-477-7469'}</p>
                    </div>
                    <p className={classes.subText}>
                      {'Interested in employment opportunities at WorldStage'}{' '}
                      <a href="mailto:info@meetiris.com" className={classes.link}>
                        {'Click Here'}
                      </a>
                    </p>
                  </View>
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
                <View className={classes.inputItem}>
                  <FormTextInput
                    value={firstName || ''}
                    type="text"
                    error={!!errs?.firstName}
                    helperText={errs?.firstName}
                    InputProps={{ inputProps: { maxLength: 50 } }}
                    label="FIRST NAME"
                    onChange={handleTextFieldChanged('firstName')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <View className={classes.inputItem}>
                  <FormTextInput
                    value={lastName || ''}
                    type="text"
                    error={!!errs?.lastName}
                    helperText={errs?.lastName}
                    InputProps={{ inputProps: { maxLength: 50 } }}
                    label="LAST NAME"
                    onChange={handleTextFieldChanged('lastName')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <View className={classes.inputItem}>
                  <FormTextInput
                    value={email || ''}
                    type="email"
                    valid={!validators.getEmailErr(email)}
                    error={!!errs?.email}
                    helperText={errs?.email}
                    InputProps={{ inputProps: { maxLength: 50 } }}
                    label="EMAIL"
                    onChange={handleTextFieldChanged('email')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <View className={classes.inputItem}>
                  <FormTextInput
                    value={phoneNumber || ''}
                    type="text"
                    error={!!errs?.phoneNumber}
                    helperText={errs?.phoneNumber}
                    InputProps={{ inputProps: { maxLength: 50 } }}
                    label="PHONE NUMBER"
                    onChange={handleTextFieldChanged('phoneNumber')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} style={globalStyles.inputItem}>
                <View className={classes.textAreaItem}>
                  <FormTextArea
                    label="A BRIEF MESSAGE"
                    onChange={handleTextFieldChanged('message')}
                    value={message || ''}
                    className={classes.textArea}
                  />
                </View>
              </Grid>
              <Grid item xs={12}>
                <Title className={classes.errors} type="h3">
                  {'ALL REQUIRED FIELDS (*)'}
                </Title>
              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} sm={12}>
                  <View row className={classes.wrapBtn}>
                    <ContainedButton className={classes.btn} processing={processing} disabled={processing} onClick={submit}>
                      {'SEND MESSAGE'}
                    </ContainedButton>
                  </View>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </DashboardScreenContainer>
      <ScreenFooter theme="dark" />
    </>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      margin: '124px 124px',
      padding: '80px 100px',
      borderRadius: 20,
      position: 'relative',
      maxWidth: 1599,
      lineHeight: 1.3,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        borderRadius: 35,
        margin: '50px 124px',
      },
      [theme.breakpoints.down('md')]: {
        padding: '44px 20px',
        margin: '50px 57px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '34px 20px',
        margin: '49px 20px',
      },
    },
    headerSection: {
      display: 'inline',
      lineHeight: 1.4,
      paddingRight: 197,
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      [theme.breakpoints.down('lg')]: {
        paddingRight: 20,
      },
    },
    primaryHeader: {
      fontWeight: 500,
      color: colors.warmPurple,
      fontSize: 30,
      marginBottom: 13,
      paddingLeft: 6,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 6,
      },
    },
    secondaryHeader: {
      paddingLeft: 16,
      fontWeight: 500,
      color: colors.marineBlue,
      fontSize: 16,
      marginBottom: 20,
      [theme.breakpoints.down('md')]: {
        marginBottom: 10,
      },
    },
    contactForm: {
      [theme.breakpoints.down('sm')]: {
        marginTop: 55,
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
      marginBottom: 81,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 31,
      },
    },
    inputItem: {
      marginRight: 9,
      marginLeft: 9,
      marginBottom: 2,
      [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginLeft: 0,
        marginBottom: '-10px',
      },
    },
    textAreaItem: {
      marginRight: 9,
      marginLeft: 9,
      marginBottom: 2,
      [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginLeft: 0,
      },
    },
    colRight: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: 25,
      paddingLeft: 6,
    },
    phoneNumber: {
      display: 'flex',
      alignItems: 'center',
      color: colors.coolBlue,
      paddingLeft: 6,
      fontSize: 18,
    },
    phoneIcon: {
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        marginRight: 10,
      },
    },
    getInTouch: {
      [theme.breakpoints.down('lg')]: {
        transform: 'translateY(-15px) !important',
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'translateY(0px)',
      },
    },
    subText: {
      color: colors.coolBlue,
      marginTop: 23,
      paddingLeft: 6,
      [theme.breakpoints.down('md')]: {
        paddingTop: 4,
        marginTop: 0,
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 13,
      },
    },
    link: {
      color: colors.marineBlue,
    },
    errors: {
      color: colors.vermillion,
      textAlign: 'right',
      fontWeight: 400,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
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
    wrapBtn: {
      display: 'flex',
      justifyContent: 'center',
    },
    btn: {
      background: colors.marineBlue,
      borderRadius: '6px',
      width: '220px!important',
      height: '52px',
      marginTop: 13,
      marginBottom: 30,
    },
    textArea: {
      height: 170,
      [theme.breakpoints.down('md')]: {
        height: 221,
      },
    },
  })();

export type DashboardContactScreenProps = Props;
export default DashboardContactScreen;
