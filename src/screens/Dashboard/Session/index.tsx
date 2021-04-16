import { View, Title } from 'components/Common';
import { makeStyles, Paper, Theme, useTheme, Grid, Divider, useMediaQuery } from '@material-ui/core';
import { FormSelect, FormTextInput, FormTextArea } from 'components/Form';
import React, { FC, useState } from 'react';
import { ContainedButton } from 'components/Buttons';
import { colors, StyleProps, Styles } from 'styles';
import { BackgroundedContainer } from 'components/Layout';
import AccordionSections from 'components/Navigation/AccordionSecions';
import { ScreenTitle } from 'components/Screen';
import { LineTabs } from 'components/Navigation/LineTabs';
import SponsorTab from './SessionTabs/SponsorTab';
import PresenterTab from './SessionTabs/PresenterTab';
import AgendaTab from './SessionTabs/AgendaTab';
import AttendeeTab from './SessionTabs/AttendeeTab';
import PollingTab from './SessionTabs/PollingTab';
import QaTab from './SessionTabs/QaTab';

type Props = StyleProps;

export const DashboardSetupSession: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [tab, setTab] = useState<number>(0);

  const userRoles = [{ value: 'Administrator' }, { value: 'Manager' }];
  const timeZones = [
    { value: '(GMT-04:00) Eastern Standard Time' },
    { value: '(GMT-05:00) Central Standard Time' },
    { value: '(GMT-06:00) Mountain Standard Time' },
    { value: '(GMT-07:00) Pacific Standard Time' },
  ];

  const bannerImages = [
    {
      url:
        'https://images.unsplash.com/photo-1597075000512-e64635882ac4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1509559304870-4ecd0f47e86e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1550293750-dde2bed30d54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  const bgImages = [
    {
      url:
        'https://images.unsplash.com/photo-1516352254823-8fce5b3d7ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1604762525784-e315f3f2b971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1526112562240-f3c31a27a110?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    },
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
              {!isMobile ? (
                <>
                  <p style={styles.secondaryText}>
                    {
                      'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.'
                    }
                  </p>
                  <p style={styles.secondaryText}>
                    {'Lorem ipsum dolor sit ametnstur adipiscing elit, sed do eiusmod tempor incididunt ut labore,'}
                  </p>
                </>
              ) : (
                <p style={styles.title}>{'Please Create Your Session on a Larger Screen'}</p>
              )}
            </Grid>
            <Grid sm={12} md={9} lg={9}>
              {!isMobile && (
                <>
                  <div style={styles.setupSession}>
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
                              content: <SponsorTab />,
                            },
                            {
                              id: 1,
                              title: 'Presenter Info',
                              toggle: { visible: true, value: true },
                              content: <PresenterTab />,
                            },
                            {
                              id: 2,
                              title: 'Agenda',
                              toggle: { visible: true, value: true },
                              content: <AgendaTab />,
                            },
                            {
                              id: 3,
                              title: 'Attendees',
                              toggle: { visible: true, value: true },
                              content: <AttendeeTab />,
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
                              content: <PollingTab />,
                            },
                            {
                              id: 8,
                              title: 'Q&A',
                              toggle: { visible: true, value: true },
                              content: <QaTab />,
                            },
                          ]}
                        />
                      </View>
                      <Divider style={styles.divider} />
                    </View>
                  </div>
                  <div style={styles.artworkSection}>
                    <View>
                      <span style={styles.title}>{'Session Artwork'}</span>
                      <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>

                      <span style={styles.title2}>{'Banner Image'}</span>
                      <span style={styles.subtitle}>{'Choose your session banner image or upload a custom image.'}</span>
                      <View row style={styles.bannerSection}>
                        {bannerImages.map(img => (
                          <img key={img.url} src={img.url} style={styles.bannerImg} />
                        ))}
                      </View>
                      <span style={styles.subText}>{'Optimal dimensions 1920 x 1080px and 2MB or less'}</span>
                      <ContainedButton style={styles.addImgBtn} size="large" endIcon="plus-circle">
                        {'ADD IMAGE'}
                      </ContainedButton>
                      <Divider />
                    </View>
                    <span style={styles.title2}>{'Player Background Image'}</span>
                    <span style={styles.subtitle}>{'Choose and image or color as your player background.'}</span>
                    <LineTabs
                      className={classes.colorTabs}
                      tab={tab}
                      tabs={[
                        { index: 0, label: 'Image' },
                        { index: 1, label: 'Color' },
                      ]}
                      onChange={(_e, val) => setTab(val)}
                    />
                    <View row style={styles.backgroundSelection}>
                      {bgImages.map(img => (
                        <img key={img.url} src={img.url} style={styles.artworkImg} />
                      ))}
                    </View>
                    <span style={styles.subText}>{'Optimal dimensions 1920 x 1080px and 2MB or less'}</span>
                    <ContainedButton style={styles.addImgBtn} size="large" endIcon="plus-circle">
                      {'ADD IMAGE'}
                    </ContainedButton>
                    <Divider />
                    <View row style={styles.createSession}>
                      <ContainedButton style={styles.createSessionBtn} size="large" endIcon="arrow-right">
                        {'CREATE SESSION'}
                      </ContainedButton>
                    </View>
                  </div>
                </>
              )}
            </Grid>
          </Grid>
        </Paper>
      </BackgroundedContainer>
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
  bannerSection: {
    marginTop: 20,
    marginBottom: 18,
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
  },
  backgroundSelection: {
    marginTop: 37,
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    marginBottom: 20,
  },
  artworkImg: {
    marginRight: 35.5,
    width: 452,
    height: 325,
    objectFit: 'cover',
  },
  bannerImg: {
    marginRight: 28.5,
    width: 192,
    height: 163,
    objectFit: 'cover',
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
    paddingLeft: 64,
    paddingTop: 57,
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
    paddingTop: 64,
    paddingRight: 64,
    paddingBottom: 0,
  },
  artworkSection: {
    borderLeft: `1px solid ${colors.greyish}`,
    paddingLeft: 55,
    paddingBottom: 64,
  },
  title: {
    letterSpacing: '0px',
    color: colors.marine,
    display: 'block',
    paddingBottom: 7,
    fontWeight: 500,
  },
  title2: {
    textTransform: 'uppercase',
    letterSpacing: '0px',
    color: colors.coolBlue,
    display: 'block',
    paddingTop: 35,
    paddingBottom: 7,
    fontWeight: 500,
  },
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
  },
  subText: {
    fontSize: 14,
    color: colors.brownishGrey,
  },
  addImgBtn: {
    width: 175,
    height: 52,
    letterSpacing: 2.25,
    fontSize: 13,
    marginTop: 10,
    marginBottom: 43,
  },
  createSession: {
    flexDirection: 'row-reverse',
  },
  createSessionBtn: {
    width: 243,
    height: 52,
    marginTop: 18,
    marginRight: 55,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      margin: '55px 35px',
      borderRadius: 20,
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      maxWidth: '82.5%',
      '& .MuiAccordionDetails-root': {
        padding: '10px 5px',
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        background: colors.white,
        border: 'none',
        borderTop: `1px solid ${colors.greyish}`,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 75,
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
    colorTabs: {
      marginTop: 26,
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
