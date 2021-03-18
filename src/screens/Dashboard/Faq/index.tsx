import { ScreenTitle, Title } from 'components/Common';
import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { BackgroundedContainer } from 'components/Layout';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';
import AccordionSections from 'components/Navigation/AccordionSecions';

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
            {'Digital Oasis FAQ'}
          </Title>
          <p className={classes.secondaryText}>
            {'If you are coming to an event at Digital Oasis take a look at these frequently asked questions:'}
          </p>
          <ul className={classes.primaryList}>
            <li className={classes.listItemHeader}>
              <p className={classes.listItemHeader}>{'ABOUT PLATFORM'}</p>
              <AccordionSections
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
    </>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      margin: '55px 35px',
      padding: '45px 20px',
      borderRadius: 20,
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      maxWidth: '82.5%',
      lineHeight: 1.3,

      [theme.breakpoints.up('lg')]: {
        padding: '60px 140px',
      },
    },
    primaryHeader: {
      fontWeight: 500,
      color: colors.marineBlue,
      fontSize: 36,
      marginBottom: 5,
    },
    secondaryText: {
      color: colors.brownishGrey,
      paddingTop: 20,
      paddinBottom: 8,
      fontSize: 18,
    },
    primaryList: {
      listStyle: 'none',
      marginTop: 25,
    },
    listItemHeader: {
      color: colors.coolBlue,
      paddingTop: 3,
      marginBottom: 20,
      fontSize: 18,
    },
  })();

export type DashboardFaqScreenProps = Props;
export default DashboardFaqScreen;
