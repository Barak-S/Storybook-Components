import { View, Title } from 'components/Common';
import { makeStyles, Paper, Theme, useTheme, Grid, Divider, useMediaQuery } from '@material-ui/core';
import { FormSelect, FormTextInput, FormTextArea } from 'components/Form';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import { BackgroundedContainer } from 'components/Layout';
import AccordionSections from 'components/Navigation/AccordionSecions';
import { ScreenFooter, ScreenTitle } from 'components/Screen';

import SponsorInfo from './SessionTabs/SponsorInfo';

type Props = StyleProps;

export const DashboardSetupSession: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const userRoles = [{ value: 'Administrator' }, { value: 'Manager' }];
  const timeZones = [
    { value: '(GMT-04:00) Eastern Standard Time' },
    { value: '(GMT-05:00) Central Standard Time' },
    { value: '(GMT-06:00) Mountain Standard Time' },
    { value: '(GMT-07:00) Pacific Standard Time' },
  ];

  return (
    <>
      <ScreenTitle title="Setup Session" />
      <BackgroundedContainer style={{ minHeight: '100vh', justifyContent: 'flex-start' }}>
        <Paper className={classes.container} elevation={2}>
          <Grid container>
            <Grid sm={12} md={3} lg={3} style={styles.headerCol}>
              <Title type="h3" style={styles.primaryHeader}>
                {'Setup Session'}
              </Title>
              <p style={styles.secondaryText}>
                {
                  'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.'
                }
              </p>
              <p style={styles.secondaryText}>
                {'Lorem ipsum dolor sit ametnstur adipiscing elit, sed do eiusmod tempor incididunt ut labore,'}
              </p>
            </Grid>
            <Grid sm={12} md={9} lg={9} style={styles.setupSession}>
              {!isMobile ? (
                <>
                  <View>
                    <span style={styles.title}>{'Session Type'}</span>
                    <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
                    <FormSelect
                      className={classes.select}
                      fullWidth
                      options={userRoles}
                      label="Keynote"
                      keyExtractor={itm => itm.value}
                      titleExtractor={itm => itm.value}
                    />
                    <Divider style={styles.divider} />
                  </View>
                  <View>
                    <span style={styles.title}>{'Session Title'}</span>
                    <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
                    <FormTextInput style={styles.input} label="Session Title" />
                    <Divider style={styles.divider} />
                  </View>
                  <View>
                    <span style={styles.title}>{'Session Description'}</span>
                    <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
                    <View style={styles.textArea}>
                      <FormTextArea label="Write a session description" />
                    </View>
                    <Divider style={styles.divider} />
                  </View>

                  <View>
                    <span style={styles.title}>{'Session Date and Time'}</span>
                    <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
                    <FormSelect
                      className={classes.select}
                      fullWidth
                      options={userRoles}
                      label="Select Session Date"
                      keyExtractor={itm => itm.value}
                      titleExtractor={itm => itm.value}
                    />
                    <View row style={styles.selectTimeRow}>
                      <FormSelect
                        className={classes.select2}
                        fullWidth
                        options={userRoles}
                        label="Start Time"
                        keyExtractor={itm => itm.value}
                        titleExtractor={itm => itm.value}
                      />

                      <span style={styles.timeTo}>{'to'}</span>

                      <FormSelect
                        className={classes.select2}
                        fullWidth
                        options={userRoles}
                        label="End Time"
                        keyExtractor={itm => itm.value}
                        titleExtractor={itm => itm.value}
                      />
                      <FormSelect
                        className={classes.select3}
                        fullWidth
                        options={timeZones}
                        label="Time Zone"
                        keyExtractor={itm => itm.value}
                        titleExtractor={itm => itm.value}
                      />
                    </View>
                    <Divider style={styles.divider} />
                  </View>
                  <View>
                    <span style={styles.title}>{'AUDIENCE ENGAGEMENT MODULES'}</span>
                    <span style={styles.subtitle}>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'
                      }
                    </span>
                    <View style={styles.accordionSection}>
                      <AccordionSections
                        style={styles.accordion}
                        className={classes.accordion}
                        sections={[
                          {
                            id: 0,
                            title: 'Sponsor Information',
                            toggle: { visible: true, value: true },
                            content: <SponsorInfo />,
                          },
                          {
                            id: 1,
                            title: 'Presenter Info',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                          {
                            id: 2,
                            title: 'Agenda',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                          {
                            id: 3,
                            title: 'Attendees',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                          {
                            id: 4,
                            title: 'Chat',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                          {
                            id: 5,
                            title: 'Downloads',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                          {
                            id: 6,
                            title: 'Notes',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                          {
                            id: 7,
                            title: 'Polling',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                          {
                            id: 8,
                            title: 'Q&A',
                            toggle: { visible: true, value: true },
                            content: '',
                          },
                        ]}
                      />
                    </View>
                    <Divider style={styles.divider} />
                  </View>
                  <View>
                    <span style={styles.title}>{'Session Artwork'}</span>
                    <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
                  </View>
                </>
              ) : (
                <View>
                  <span style={styles.title}>{'Please Setup Your Session On A Bigger Screen'}</span>
                </View>
              )}
            </Grid>
          </Grid>
        </Paper>
      </BackgroundedContainer>
      <ScreenFooter theme="light" />
    </>
  );
};

const styles: Styles = {
  divider: {
    marginBottom: 30,
  },
  accordion: {
    color: colors.brownishGrey,
    borderRadius: 10,
    background: 'linear-gradient(90deg, rgba(242,243,244,1) 0%, rgba(221,223,225,1) 100%)',
    boxShadow: 'none',
    fontWeight: 400,
    marginBottom: 7.5,
    marginTop: 0,
  },
  timeTo: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 32,
    paddingRight: 17,
    marginLeft: '-15px',
    color: colors.coolGrey,
  },
  input: {
    marginTop: 18,
    marginBottom: 35,
  },
  textArea: {
    marginTop: 18,
    marginBottom: 30,
  },
  selectTimeRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  primaryList: {
    listStyle: 'none',
    marginTop: 10,
  },
  listItemHeader: {
    fontWeight: 500,
    color: colors.coolBlue,
    paddingTop: 12,
    marginBottom: 20,
    fontSize: 18,
  },
  headerCol: {
    paddingRight: 32,
  },
  accordionSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  primaryHeader: {
    fontWeight: 500,
    color: colors.warmPurple,
    fontSize: 30,
    marginBottom: 5,
  },
  secondaryText: {
    color: colors.brownishGrey,
    paddingTop: 15,
    fontSize: 18,
  },
  setupSession: {
    borderLeft: `1px solid ${colors.greyish}`,
    paddingLeft: 55,
  },
  title: {
    letterSpacing: '0px',
    color: colors.marine,
    display: 'block',
    paddingBottom: 7,
    fontWeight: 500,
  },
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      margin: '55px 35px',
      padding: '64px 64px',
      borderRadius: 20,
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      maxWidth: '82.5%',
      lineHeight: 1.3,
      [theme.breakpoints.up('md')]: {
        padding: '64px 64px',
        borderRadius: 30,
      },
      '& .MuiAccordionDetails-root': {
        padding: '10px 5px',
      },
    },
    select: {
      maxWidth: 266,
      marginTop: 21,
      marginBottom: 35,
    },
    select2: {
      maxWidth: 145,
      marginTop: 8,
      marginBottom: 35,
      marginRight: 39,
    },
    select3: {
      maxWidth: 354,
      marginTop: 8,
      marginBottom: 44,
    },
    accordion: {
      [theme.breakpoints.up('sm')]: {
        height: 76,
      },
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      '&:hover': {
        background: colors.paleGrey,
      },
    },
  })();

export type DashboardSetupSessionProps = Props;
export default DashboardSetupSession;
