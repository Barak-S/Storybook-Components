import { Grid, makeStyles, Paper, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { RoundedIconButton } from 'components/Buttons';
import { Text, Title } from 'components/Common';
import { DashbaordStepperMobileLabel, DashboardStepper } from 'components/Dashboard';
import React, { FC } from 'react';
import { colors, mx, StyleProps } from 'styles';

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

export const OnboardingContainer: FC<Props> = ({ title, steps, curStepIndex = 0, onCloseClick, children }) => {
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
        <Grid container>
          <Grid item xs={12}>
            <Grid className={classes.header}>
              <Title type="h3" className={classes.headerTitle}>
                {title}
              </Title>
              <Grid style={{ width: '100%' }}>
                <DashboardStepper steps={stepperSteps} activeStep={curStepIndex} />
                {isMobile && <DashbaordStepperMobileLabel steps={stepperSteps} curStepIndex={curStepIndex} />}
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
      </Paper>
      {isDesktop && <RoundedIconButton icon="times" onClick={onCloseClick} className={classes.close} />}
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
      background: 'transparent',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        background: colors.white,
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
      height: '100%',
      padding: 30,
      background: colors.white,
      [theme.breakpoints.up('md')]: {
        ...mx.borderTop(1, 'solid', colors.silver),
      },
      [theme.breakpoints.up('lg')]: {
        padding: '65px 78px',
      },
    },
    close: {
      marginLeft: 20,
    },
  })();

export type OnboardingContainerProps = Props;
export default OnboardingContainer;
