import { Grid, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: string[];
  curStepIndex: number;
}

export const StepperMobileLabel: FC<Props> = ({ steps, curStepIndex }) => {
  const classes = useStyles();

  return <Grid className={classes.container}>{steps[curStepIndex]}</Grid>;
};

const useStyles = makeStyles({
  container: {
    color: colors.warmPurple,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default StepperMobileLabel;
