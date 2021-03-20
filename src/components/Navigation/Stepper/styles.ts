import { StepConnector, withStyles } from '@material-ui/core';
import { colors } from 'styles';

export const StepperConnector = withStyles({
  alternativeLabel: {
    top: 19,
    left: '-50%',
    right: '50%',
  },
  active: {
    '& $line': {
      background: colors.warmPurple,
    },
  },
  completed: {
    '& $line': {
      background: colors.warmPurple,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: colors.silver,
    borderRadius: 1,
  },
})(StepConnector);
