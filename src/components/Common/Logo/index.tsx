import React, { FC } from 'react';
import { mc, Style } from 'styles';
import logoImg from 'assets/logo.png';
import { Image } from 'components/Common';
import { makeStyles, Theme, useTheme } from '@material-ui/core';

interface Props {
  style?: Style;
  className?: string;
}

export const Logo: FC<Props> = ({ style, className }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <Image className={mc(className, classes.logo)} style={style} source={logoImg} />;
};

const useStyles = (theme: Theme) =>
  makeStyles({
    logo: {
      width: 112,
      height: 63,

      [theme.breakpoints.up('lg')]: {
        width: 224,
        height: 126,
      },
    },
  })();

export default Logo;
