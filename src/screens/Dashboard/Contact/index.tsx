import { Grid, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { Title, View } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import { useSnackbar } from 'components/Feedback';
import { FormTextArea, FormTextInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import { ScreenFooter, ScreenTitle } from 'components/Screen';
import { Log } from 'core';
import { SupportContactRequest } from 'core/api';
import { getRecaptchaChallangeToken } from 'core/recaptcha';
import React, { ChangeEvent, FC, useState } from 'react';
import { useStoreManager } from 'store';
import { colors, StyleProps, Styles } from 'styles';
import { errToStr, isDictEmpty, validators } from 'utils';

const log = Log('screens.DashboardContact');

type Props = StyleProps;

type FormData = Omit<Partial<SupportContactRequest>, 'token'>;

type FormErrs = Partial<Record<keyof FormData, string>> & { form?: string };

export const DashboardContactScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [errs, setErrs] = useState<FormErrs | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);

  const { email, firstName, lastName, phone, message } = data;

  const theme = useTheme();
  const classes = useStyles(theme);
  const manager = useStoreManager();
  const { showSnackbar } = useSnackbar();

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrs(undefined);
    setData({ ...data, [key]: event.currentTarget.value });
  };

  const getFormErrs = (data: FormData): FormErrs | undefined => {
    const errs: FormErrs = {
      email: validators.getEmailErr(data.email, { required: true, requiredMsg: 'An Email is required' }),
      firstName: validators.getNameErr(data.firstName, { required: true, requiredMsg: 'A first name is required' }),
      lastName: validators.getNameErr(data.lastName, { required: true, requiredMsg: 'A last name is required' }),
      phone: validators.getPhoneNumberErr(data.phone, { required: true, requiredMsg: 'A phone number is required' }),
      message: validators.getTextAreaErr(data.message, { required: true, requiredMsg: 'A message is required' }),
    };
    return !isDictEmpty(errs) ? errs : undefined;
  };

  const handleSubmit = async () => {
    log.debug('handle submit');
    const curErrs = getFormErrs(data);
    if (curErrs) {
      return setErrs(curErrs);
    }
    if (!firstName || !lastName || !email || !phone || !message) {
      return;
    }
    try {
      setProcessing(true);
      log.debug('showing recaptcha challange');
      const token = await getRecaptchaChallangeToken();
      log.debug('showing recaptcha challange done');
      log.trace(token);
      log.debug('making contact req');
      await manager.api.support.contact({ firstName, lastName, email, phone, message, token });
      log.debug('making contact req done');
      setData({});
      setProcessing(false);
      showSnackbar('A message has been sent. We will contact you soon', 'success');
    } catch (err: unknown) {
      log.err(err);
      setProcessing(false);
      showSnackbar(errToStr(err) || 'Sending request error', 'error');
    }
  };

  return (
    <>
      <ScreenTitle title="Contact Us" />
      <DashboardScreenContainer
        style={{ minHeight: '100vh', backgroundColor: colors.darkIndigo, alignItems: 'center', padding: 0 }}
      >
        <Paper className={classes.container}>
          <Grid container>
            <Grid item sm={12} lg={5}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Title type="h3" className={classes.primaryHeader}>
                  {'Contact Us'}
                </Title>
              </Grid>
              <Grid container className={classes.headerSection}>
                <Grid item xs={12} sm={12} md={6} lg={12} className={classes.colRight}>
                  <p className={classes.listText}>
                    {
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor s, consectetur adipiscing elitsed.'
                    }
                  </p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={12}>
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

            <Grid container item sm={12} xs={12} lg={7} className={classes.contactForm}>
              <Grid item xs={12} sm={12} lg={12}>
                <Title type="h3" className={classes.secondaryHeader}>
                  {'Get In Touch'}
                </Title>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.inputItem}>
                <View>
                  <FormTextInput
                    value={firstName || ''}
                    type="text"
                    error={!!errs?.firstName}
                    helperText={errs?.firstName}
                    maxLength={50}
                    className={classes.input}
                    inputStyle={styles.input}
                    label="First Name"
                    onChange={handleTextFieldChanged('firstName')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.inputItem}>
                <View>
                  <FormTextInput
                    value={lastName || ''}
                    type="text"
                    error={!!errs?.lastName}
                    helperText={errs?.lastName}
                    maxLength={50}
                    className={classes.input}
                    inputStyle={styles.input}
                    label="Last Name"
                    onChange={handleTextFieldChanged('lastName')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.inputItem}>
                <View>
                  <FormTextInput
                    value={email || ''}
                    type="email"
                    valid={!validators.getEmailErr(email)}
                    error={!!errs?.email}
                    helperText={errs?.email}
                    maxLength={50}
                    className={classes.input}
                    inputStyle={styles.input}
                    label="Email"
                    onChange={handleTextFieldChanged('email')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.inputItem}>
                <View>
                  <FormTextInput
                    value={phone || ''}
                    type="text"
                    error={!!errs?.phone}
                    helperText={errs?.phone}
                    maxLength={50}
                    className={classes.input}
                    inputStyle={styles.input}
                    label="Phone Number"
                    onChange={handleTextFieldChanged('phone')}
                  />
                </View>
              </Grid>
              <Grid item xs={12} className={classes.inputItem}>
                <View>
                  <FormTextArea
                    label="A Brief Message"
                    value={message || ''}
                    error={!!errs?.message}
                    helperText={errs?.message}
                    className={classes.textAreaInput}
                    onChange={handleTextFieldChanged('message')}
                    style={{ height: 170 }}
                  />
                </View>
                <Title className={classes.errors} type="h3">
                  {'ALL REQUIRED FIELDS (*)'}
                </Title>
              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} sm={12}>
                  <View row className={classes.wrapBtn}>
                    <ContainedButton className={classes.btn} processing={processing} disabled={processing} onClick={handleSubmit}>
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
      margin: '123px 57px',
      padding: '80px 100px',
      paddingBottom: 79,
      marginBottom: 169,
      borderRadius: 20,
      position: 'relative',
      maxWidth: 1452,
      lineHeight: 1.3,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        margin: '50px 57px',
      },
      [theme.breakpoints.down('md')]: {
        borderRadius: 35,
        padding: '44px 20px',
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
      paddingLeft: 8,
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
        padding: '0px !important',
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
    },
    input: {
      maxWidth: 337,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },
    textAreaInput: {
      maxWidth: 700,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },
    resize: {
      fontSize: 16,
    },
    colRight: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: 25,
      paddingLeft: 6,
    },
    phoneNumber: {
      paddingTop: 112,
      display: 'flex',
      alignItems: 'center',
      color: colors.coolBlue,
      paddingLeft: 6,
      fontSize: 18,
      [theme.breakpoints.down('md')]: {
        paddingTop: 0,
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 45,
      },
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
      [theme.breakpoints.down('md')]: {
        paddingLeft: 6,
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'translateY(0px)',
        paddingLeft: 0,
      },
    },
    subText: {
      color: colors.coolBlue,
      marginTop: 23,
      paddingLeft: 6,
      [theme.breakpoints.down('md')]: {
        paddingTop: 4,
        paddingLeft: 12,
        marginTop: 0,
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 13,
        paddingLeft: 6,
      },
    },
    link: {
      color: colors.marineBlue,
      display: 'inline-block',
    },
    errors: {
      color: colors.vermillion,
      textAlign: 'right',
      fontWeight: 400,
      paddingTop: 12,
      paddingRight: 12,
      [theme.breakpoints.down('md')]: {
        paddingRight: 0,
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
      width: '200px!important',
      height: '52px',
      marginTop: 13,
      marginBottom: 30,
      letterSpacing: 2.25,
      fontSize: 14,
    },
    textArea: {
      height: 170,
      [theme.breakpoints.down('md')]: {
        height: 221,
      },
    },
    inputItem: {
      padding: '15px 8px',
      [theme.breakpoints.down('xs')]: {
        padding: '12px 8px',
      },
    },
  })();

const styles: Styles = {
  input: {
    fontSize: 16,
  },
};

export type DashboardContactScreenProps = Props;
export default DashboardContactScreen;
