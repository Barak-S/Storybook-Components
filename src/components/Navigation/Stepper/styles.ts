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
      background: colors.steal,
    },
  },
  completed: {
    '& $line': {
      background: colors.steal,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: colors.tint3,
    borderRadius: 1,
  },
})(StepConnector);
