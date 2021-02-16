import { colors, Styles, sizes } from 'styles';

export const styles: Styles = {
  logo: {
    position: 'absolute',
    left: 72,
    top: 58,
    width: 224,
    height: 126,
  },
  title: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: sizes.h2,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: sizes.h6,
    marginBottom: 35,
  },
  passHint: {
    fontSize: 12,
    fontStyle: 'italic',
    color: colors.brownishGreyTwo,
  },
  errWrap: {
    height: 40,
  },
  err: {
    color: colors.error,
    fontSize: 12,
    textAlign: 'center',
  },
  password: {
    marginBottom: 30,
  },
  copyright: {
    position: 'absolute',
    left: 82,
    bottom: 41,
  },
};
