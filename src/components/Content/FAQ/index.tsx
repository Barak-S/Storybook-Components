import { makeStyles, Paper, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { Title } from 'components/Common';
import { AccordionSections } from 'components/Navigation';
import { ScreenTitle } from 'components/Screen';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const ContentFAQ: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const styles = getStyles(isMobile);

  return (
    <>
      <ScreenTitle title="FAQ" />
      <Paper className={classes.container} elevation={2}>
        <Title type="h3" className={classes.primaryHeader}>
          {'IRIS FAQ'}
        </Title>
        <p className={classes.secondaryText}>
          {'If you are coming to an event at IRIS take a look at these frequently asked questions:'}
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
    </>
  );
};

const getStyles = (isMobile: boolean): Styles => ({
  accordion: {
    boxShadow: 'none',
    fontWeight: 400,
    marginBottom: isMobile ? 12 : 5,
    marginTop: 0,
  },
});

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      padding: '70px 100px',
      borderRadius: 20,
      margin: '55px 105px',
      alignItems: 'center',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        padding: '33px 43px',
        borderRadius: 30,
        margin: '55px 75px',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '35px 15px',
        padding: '40px 20px',
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        border: 'none',
        borderTop: `1px solid ${colors.greyish}`,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        height: 75,
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
      [theme.breakpoints.down('sm')]: {
        minHeight: '76px',
      },
      '&:hover': {
        background: colors.paleGrey,
        transition: 'none',
      },
    },
  })();

export type ContentFAQProps = Props;
export default ContentFAQ;
