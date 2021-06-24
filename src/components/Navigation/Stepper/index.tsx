import {
  makeStyles,
  Step as MaterialStep,
  StepLabel as MaterialStepLabel,
  Stepper as MaterialStepper,
  Theme,
  useTheme,
} from '@material-ui/core';
import React, { FC } from 'react';
import { colors, mc, StyleProps, useScreenSizes } from 'styles';

import StepperIcon from './components/Icon';
import { StepperConnector } from './styles';

interface Props extends StyleProps {
  steps: string[];
  activeStep: number;
}

export const Stepper: FC<Props> = ({ steps, activeStep, style }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { isMobile, isDesktop } = useScreenSizes();

  const renderSteps = steps.map((label, index) => {
    const isCompleted = index < activeStep;
    const isActive = index === activeStep;
    const isActiveLabel = isActive || isCompleted;
    const iconLabel = !isMobile || isActive ? index + 1 : undefined;

    return (
      <MaterialStep className={classes.step} key={label} style={{ zIndex: 10 - index }}>
        <MaterialStepLabel
          icon={<StepperIcon label={iconLabel} active={isActive} completed={isCompleted} />}
          className={mc(classes.label, isActiveLabel && classes.activeStep)}
        >
          {isDesktop ? label : undefined}
        </MaterialStepLabel>
      </MaterialStep>
    );
  });

  return (
    <MaterialStepper
      style={style}
      className={classes.container}
      alternativeLabel
      activeStep={activeStep}
      connector={<StepperConnector />}
    >
      {renderSteps}
    </MaterialStepper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      background: 'none',
      width: '100%',
      maxWidth: 1000,
      padding: 0,
    },
    step: {
      '&.MuiStep-completed': {
        transform: 'translateY(8px)',
        [theme.breakpoints.up('md')]: {
          transform: 'initial',
        },
        '& .MuiStepConnector-alternativeLabel': {
          top: 11,
          [theme.breakpoints.up('md')]: {
            top: 19,
          },
        },
      },
      '& .Mui-disabled': {
        transform: 'translateY(13px)',
        [theme.breakpoints.up('md')]: {
          transform: 'initial',
        },
      },
      '& .MuiStepConnector-alternativeLabel.Mui-disabled': {
        top: 6,
        [theme.breakpoints.up('md')]: {
          top: 19,
        },
      },
    },
    label: {
      color: colors.tint1,
      fontWeight: 500,
      '& .MuiStepLabel-iconContainer': {
        marginBottom: 9,
      },
      '& .MuiStepLabel-labelContainer': {
        position: 'absolute',
        whiteSpace: 'nowrap',
        top: 42,
        [theme.breakpoints.up('md')]: {
          position: 'relative',
          top: 'initial',
          transform: 'translateX(42%)',
          paddingRight: 10,
        },
      },
      '& .MuiStepLabel-label': {
        marginTop: 0,
        color: 'inherit',
        fontWeight: 'inherit',
        textAlign: 'left',
        textTransform: 'uppercase',
        fontSize: 14,
      },
    },
    activeStep: {
      color: colors.IRISteal,
    },
  })();

export type StepperProps = Props;
export default Stepper;
