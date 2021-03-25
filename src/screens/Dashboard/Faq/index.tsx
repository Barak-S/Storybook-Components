import { ScreenTitle, Title } from 'components/Common';
import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { BackgroundedContainer } from 'components/Layout';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import AccordionSections from 'components/Navigation/AccordionSecions';
import { ScreenFooter } from 'components/Screen';

type Props = StyleProps;

export const DashboardFaqScreen: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="FAQ" />
      <BackgroundedContainer style={{ minHeight: '100vh', justifyContent: 'flex-start' }}>
        <Paper className={classes.container} elevation={2}>
          <Title type="h3" className={classes.primaryHeader}>
            {'IRIS FAQ'}
          </Title>
          <p className={classes.secondaryText}>
            {'If you are coming to an event at Digital Oasis take a look at these frequently asked questions:'}
          </p>
          <ul className={classes.primaryList}>
            <li className={classes.listItemHeader}>
              <p className={classes.listItemHeader}>{'ABOUT PLATFORM'}</p>
              <AccordionSections
                style={styles.accordion}
                className={classes.accordion}
                sections={[
                  {
                    id: 0,
                    title: 'Is there an app I can download?',
                    content:
                      'No there is no mobile app yet, but you can always bookmark the website on your mobile or desktop for quick access.',
                  },
                  {
                    id: 1,
                    title: 'Does this site follow EU GDPR regulations? Can I have a copy of my data?',
                    content: 'Answer 2',
                  },
                ]}
              />
            </li>
            <li className={classes.listItemHeader}>
              <p className={classes.listItemHeader}>{'HOSTING AN EVENT'}</p>
              <AccordionSections
                style={styles.accordion}
                className={classes.accordion}
                sections={[
                  {
                    id: 0,
                    title: 'Do you offer a service where you set up my event for me?',
                    content: 'Answer 3',
                  },
                  {
                    id: 1,
                    title: 'Can I get more info on hosting my own event?',
                    content: 'Answer 4',
                  },
                ]}
              />
            </li>
            <li className={classes.listItemHeader}>
              <p className={classes.listItemHeader}>{'TECHNICAL HELP'}</p>
              <AccordionSections
                style={styles.accordion}
                className={classes.accordion}
                sections={[
                  {
                    id: 0,
                    title: 'How can I join the online sessions?',
                    content: 'Answer 5',
                  },
                  {
                    id: 1,
                    title: 'Who all can join the virtual session?',
                    content: 'Answer 6',
                  },
                  {
                    id: 2,
                    title: 'What are the technical requirements needed to participate?',
                    content: 'Answer 7',
                  },
                  {
                    id: 3,
                    title: 'Will I have access to the recordings and materials?',
                    content: 'Answer 8',
                  },
                  {
                    id: 4,
                    title: 'What is my password?',
                    content: 'Answer 9',
                  },
                  {
                    id: 5,
                    title: 'Where can I find the Bio on X presenter?',
                    content: 'Answer 10',
                  },
                  {
                    id: 6,
                    title: 'Can I watch a session that already happened?',
                    content: 'Answer 11',
                  },
                ]}
              />
            </li>
            <li className={classes.listItemHeader}>
              <p className={classes.listItemHeader}>{'ATTENDING AN EVENT'}</p>
              <AccordionSections
                style={styles.accordion}
                className={classes.accordion}
                sections={[
                  {
                    id: 0,
                    title: 'Do I need to register to attend the virtual session?',
                    content: 'Answer 12',
                  },
                  {
                    id: 1,
                    title: 'Will I be able to see the presenters for each session?',
                    content: 'Answer 13',
                  },
                  {
                    id: 2,
                    title: 'Can I ask questions during the virtual sessions?',
                    content: 'Answer 14',
                  },
                  {
                    id: 3,
                    title: 'Do I need to have webcam to attend the session?',
                    content: 'Answer 15',
                  },
                ]}
              />
            </li>
          </ul>
        </Paper>
      </BackgroundedContainer>
      <ScreenFooter theme="light" />
    </>
  );
};

const styles: Styles = {
  accordion: {
    color: colors.brownishGrey,
    borderRadius: 10,
    minHeight: 76,
    background: 'linear-gradient(90deg, rgba(242,243,244,1) 0%, rgba(221,223,225,1) 100%)',
    boxShadow: 'none',
    fontWeight: 400,
    marginBottom: 5,
    marginTop: 0,
  },
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      padding: '70px 100px',
      borderRadius: 20,
      margin: '55px 105px',
      alignItems: 'center',
      position: 'relative',
      lineHeight: 1.5,
      [theme.breakpoints.down('md')]: {
        padding: '45px 20px',
        borderRadius: 30,
        margin: '55px 75px',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '35px 15px',
      },
    },
    primaryHeader: {
      fontWeight: 500,
      color: colors.marineBlue,
      fontSize: 40,
      marginBottom: 5,
    },
    secondaryText: {
      color: colors.brownishGrey,
      paddinBottom: 8,
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 23,
      },
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
    accordion: {
      height: 76,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      '&:hover': {
        background: colors.paleGrey,
      },
    },
  })();

export type DashboardFaqScreenProps = Props;
export default DashboardFaqScreen;
