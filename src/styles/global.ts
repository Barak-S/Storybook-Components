import { colors } from 'styles';
import { Styles } from './types';

export const globalStyles: Styles = {
  halfBlock: {
    maxWidth: 275,
  },
  authSubmitWrap: {
    width: '100%',
  },
  lastChild: {
    marginBottom: 0,
    marginRight: 0,
  },
  row: {
    width: '100%',
    marginBottom: 30,
  },
  inputItem: {
    padding: '15px 8px',
  },
  passHint: {
    fontSize: 12,
    fontStyle: 'italic',
    color: colors.brownishGreyTwo,
  },
  authTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.steal,
    textTransform: 'capitalize',
    fontWeight: 500,
  },
  authSubtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.brownishGrey,
  },
  authErrWrap: {
    height: 40,
  },
  authErr: {
    color: colors.error,
    fontSize: 12,
    textAlign: 'center',
  },
};
