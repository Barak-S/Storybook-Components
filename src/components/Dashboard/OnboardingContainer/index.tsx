import { Grid, IconButton, makeStyles, Paper, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { Title, Text } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import { BackgroundedContainer } from 'components/Layout';
import React, { FC } from 'react';
import StepperMobileLabel from 'screens/Dashboard/Events/scenes/FirstEventSetup/components/MobileLabel';
import { mx, StyleProps, colors } from 'styles';
import { DashboardStepper } from '..';

interface Props extends StyleProps {
  title: string;
  steps: OnboardingStep[];
  curStepIndex?: number;
  onCloseClick?: () => void;
}

export interface OnboardingStep {
  index: number;
  title: string;
  shortTitle: string;
  description: string;
  required?: boolean;
}

export const DashboardOnboardingContainer: FC<Props> = ({ title, steps, curStepIndex = 0, onCloseClick, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const stepperSteps = steps.map(({ shortTitle }) => shortTitle);

  const { title: curStepTitle, description: curStepDescription, required } = steps[curStepIndex];

  const stepIndex = `${curStepIndex + 1}.`;

  return (
    <Grid className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <BackgroundedContainer>
          <Grid container>
            <Grid item xs={12}>
              <Grid className={classes.header}>
                <Title type="h3" className={classes.headerTitle}>
                  {title}
                </Title>
                <Grid style={{ width: '100%' }}>
                  <DashboardStepper steps={stepperSteps} activeStep={curStepIndex} />
                  {isMobile && <StepperMobileLabel steps={stepperSteps} curStepIndex={curStepIndex} />}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid className={classes.aside}>
                {isDesktop && <Text className={classes.stepIndex}>{stepIndex}</Text>}
                <Title type="h4" className={classes.stepTitle}>
                  {!isDesktop && `${stepIndex} `}
                  {curStepTitle}
                </Title>
                <Text className={classes.stepDescription}>{curStepDescription}</Text>
                {required && <Text className={classes.stepRequired}>{'required*'}</Text>}
              </Grid>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid className={classes.body}>{children}</Grid>
            </Grid>
          </Grid>
        </BackgroundedContainer>
      </Paper>
      {isDesktop && (
        <IconButton className={classes.close} onClick={onCloseClick}>
          <LineAwesomeIcon type="times" size={24} />
        </IconButton>
      )}
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      width: '100%',
      position: 'relative',
      maxWidth: 1520,
      margin: '0 auto',
    },
    paper: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        borderRadius: 30,
        overflow: 'hidden',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '25px 30px 0',
      [theme.breakpoints.up('md')]: {
        background: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '44px 82px',
      },
    },
    headerTitle: {
      color: colors.coolBlueTwo,
      fontWeight: 500,
      fontSize: 18,
      textTransform: 'uppercase',
      letterSpacing: -0.07,
      marginBottom: 24,
      [theme.breakpoints.up('md')]: {
        maxWidth: 120,
        marginBottom: 0,
      },
    },
    aside: {
      padding: 30,
      height: '100%',
      [theme.breakpoints.up('md')]: {
        background: colors.white,
        ...mx.borderTop(1, 'solid', colors.silver),
        ...mx.borderRight(1, 'solid', colors.silver),
      },
      [theme.breakpoints.up('lg')]: {
        padding: '50px 82px',
      },
    },
    stepIndex: {
      fontWeight: 500,
      fontSize: 20,
      color: colors.warmPurple,
      marginRight: 5,
      [theme.breakpoints.up('md')]: {
        display: 'block',
        fontSize: 24,
        ...mx.borderBottom(1, 'solid', 'currentColor'),
        marginRight: 0,
        marginBottom: 10,
      },
    },
    stepTitle: {
      display: 'inline-block',
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: -0.08,
      color: colors.warmPurple,
      textTransform: 'capitalize',
      marginBottom: 10,
      [theme.breakpoints.up('md')]: {
        marginBottom: 20,
        letterSpacing: -0.12,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 30,
      },
    },
    stepDescription: {
      display: 'block',
      color: colors.brownishGrey,
      fontSize: 12,
      lineHeight: 1.6,
    },
    stepRequired: {
      color: colors.rustyRed,
      fontSize: 10,
      textTransform: 'capitalize',
    },
    body: {
      background: colors.white,
      height: '100%',
      padding: 30,
      [theme.breakpoints.up('md')]: {
        ...mx.borderTop(1, 'solid', colors.silver),
      },
      [theme.breakpoints.up('lg')]: {
        padding: '65px 78px',
      },
    },
    close: {
      ...mx.square(45),
      background: colors.paleGrey,
      borderRadius: '50%',
      boxShadow: `0 0 20px ${colors.withAlpha(colors.black, 0.3)}`,
      marginLeft: 20,
    },
  })();

export type DashboardOnboardingContainerProps = Props;
export default DashboardOnboardingContainer;
