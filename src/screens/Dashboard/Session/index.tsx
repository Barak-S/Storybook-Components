import { View, Title } from 'components/Common';
import { makeStyles, Paper, Theme, useTheme, Grid, Divider, useMediaQuery } from '@material-ui/core';
import { FormSelect, FormTextInput, FormTextArea } from 'components/Form';
import React, { FC, useState } from 'react';
import { ContainedButton } from 'components/Buttons';
import { colors, StyleProps, Styles, ms } from 'styles';
import { ScreenTitle } from 'components/Screen';
import { LineTabs } from 'components/Navigation/LineTabs';
import PresenterTab from './SessionTabs/PresenterTab';

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

  const AudienceSize = [
    { value: '1-100' },
    { value: '101-250' },
    { value: '251-500' },
    { value: '501-750' },
    { value: '751-1000' },
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
      <Paper className={classes.container} elevation={2}>
        <Grid container>
          <Grid item sm={12} md={3} lg={3} style={styles.headerCol}>
            <Title type="h3" style={styles.primaryHeader}>
              {'Add Session'}
            </Title>
            {!isMobile ? (
              <p style={styles.secondaryText}>
                {
                  'This is where the client will initially set up their session type, date and time, Title and Description and presenter invites.'
                }
              </p>
            ) : (
              <p style={styles.title}>{'Please Create Your Session on a Larger Screen'}</p>
            )}
          </Grid>
          <Grid item sm={12} md={9} lg={9}>
            {!isMobile && (
              <>
                <div style={styles.setupSession}>
                  <View>
                    <span style={styles.title}>{'Session Type'}</span>
                    <span style={styles.subtitle}>
                      {'Select from the below font listing and choose the font that is closest to your events branding'}
                    </span>
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
                    <View>
                      <span style={styles.title}>{'Session Title & Description'}</span>
                      <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
                      <FormTextInput style={styles.input} label="Session Title" />
                      <View style={styles.textArea}>
                        <FormTextArea label="Write a session description" className={classes.textAreaInput} />
                      </View>
                      <Divider style={styles.divider} />
                    </View>
                    <View>
                      <View row style={{ marginBottom: 28 }}>
                        <div>
                          <span style={styles.title}>{'Audience Size'}</span>
                          <span style={ms(styles.subtitle, { paddingRight: 43 })}>
                            {'Set the amount of attendees that can elect or register for this event.'}
                          </span>
                        </div>
                        <FormSelect
                          className={classes.select4}
                          fullWidth
                          options={AudienceSize}
                          label="1-100"
                          keyExtractor={itm => itm.value}
                          titleExtractor={itm => itm.value}
                        />
                      </View>
                      <Divider style={styles.divider} />
                    </View>
                  </View>
                  <View>
                    <span style={styles.title}>{'Presenter Information'}</span>
                    <span style={styles.subtitle}>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'
                      }
                    </span>
                    <PresenterTab />
                  </View>
                </div>
                <div style={styles.artworkSection}>
                  <View>
                    <span style={styles.title}>{'Session Artwork'}</span>
                    <span style={styles.subtitle}>
                      {'You can add imagery to support the session content here or later in the appearance section.'}
                    </span>

                    <span style={styles.title2}>{'Banner Image'}</span>
                    <span style={styles.subtitle}>{'Choose your session banner image or upload a custom image.'}</span>
                    <View row style={styles.bannerSection}>
                      {bannerImages.map(img => (
                        <img key={img.url} src={img.url} style={styles.bannerImg} />
                      ))}
                    </View>
                    <span style={styles.subText}>{'Optimal dimensions 1920 x 1080px and 2MB or less'}</span>
                    <ContainedButton style={ms(styles.addImgBtn, { marginBottom: 43 })} size="large" endIcon="plus-circle">
                      {'ADD CUSTOM IMAGE'}
                    </ContainedButton>
                    <Divider style={{ marginRight: 18 }} />
                  </View>
                  <span style={styles.title2}>{'Player Background Image'}</span>
                  <span style={styles.subtitle}>{'Choose an image or color as your player background.'}</span>
                  <LineTabs
                    className={classes.colorTabs}
                    tab={tab}
                    tabs={[
                      { index: 0, label: 'Background Image' },
                      { index: 1, label: 'Background Color' },
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
                    {'ADD CUSTOM IMAGE'}
                  </ContainedButton>
                </div>
                <Divider style={{ marginRight: 37 }} />
                <View row style={styles.createSession}>
                  <ContainedButton
                    style={ms(styles.createSessionBtn, { width: 187, marginRight: 22 })}
                    size="large"
                    endIcon="arrow-right"
                  >
                    {'SAVE'}
                  </ContainedButton>
                  <ContainedButton style={ms(styles.createSessionBtn, { width: 313 })} size="large" endIcon="arrow-right">
                    {'Save & Edit Appearance'}
                  </ContainedButton>
                </View>
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

const styles: Styles = {
  divider: {
    marginBottom: 30,
  },
  accordion: {
    color: colors.brownishGrey,
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
    marginBottom: 20,
  },
  textArea: {
    marginBottom: 33,
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
    paddingRight: 37,
    paddingLeft: 41,
    paddingTop: 33,
  },
  accordionSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  primaryHeader: {
    fontWeight: 500,
    color: colors.warmPurple,
    fontSize: 30,
    marginBottom: 11,
  },
  secondaryText: {
    color: colors.brownishGrey,
    fontSize: 16,
  },
  setupSession: {
    borderLeft: `1px solid ${colors.greyish}`,
    paddingLeft: 35,
    paddingTop: 33,
    paddingRight: 43,
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
    fontSize: 16,
  },
  title2: {
    textTransform: 'uppercase',
    letterSpacing: '0px',
    color: colors.coolBlue,
    display: 'block',
    paddingTop: 35,
    paddingBottom: 7,
    fontWeight: 500,
    fontSize: 14,
  },
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
    fontSize: 16,
  },
  subText: {
    fontSize: 14,
    color: colors.brownishGrey,
  },
  addImgBtn: {
    width: 230,
    height: 52,
    letterSpacing: 2.25,
    fontSize: 13,
    marginTop: 10,
    padding: 0,
  },
  createSession: {
    justifyContent: 'center',
    marginBottom: 45,
  },
  createSessionBtn: {
    height: 52,
    marginTop: 30,
    padding: 0,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      borderRadius: 30,
      maxWidth: 1380,
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      boxShadow: '0px 0px 30px #AAAAAA41',
      '& .MuiAccordionDetails-root': {
        width: '100%',
        padding: '10px 5px',
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        border: 'none',
        borderTop: `1px solid ${colors.greyish}`,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        height: 75,
      },
    },
    textAreaInput: {
      height: 170,
    },
    select: {
      maxWidth: 266,
      marginTop: 21,
      marginBottom: 30,
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
    select4: {
      maxWidth: 137,
    },
    colorTabs: {
      marginTop: 26,
    },
    accordion: {
      [theme.breakpoints.up('sm')]: {
        height: 76,
      },
      '&:hover': {
        background: colors.paleGrey,
        transition: 'none',
      },
    },
  })();

export type DashboardSetupSessionProps = Props;
export default DashboardSetupSession;
