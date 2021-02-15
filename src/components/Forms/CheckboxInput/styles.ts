import { makeStyles } from '@material-ui/core';
import { colors } from 'styles';

export const useStyles = makeStyles(() => ({
  root: {
    marginRight: 0,
    '& [class*="MuiFormControlLabel"]': {
      color: colors.brownishGrey,
    },
  },
}));
