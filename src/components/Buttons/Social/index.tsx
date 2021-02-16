import { Button } from '@material-ui/core';
import { FacebookIcon, GoogleIcon, LinkedinIcon } from 'components/Icons';
import React, { FC, MouseEvent, ReactNode } from 'react';
import { colors, StyleProps } from 'styles';

import { useStyles } from './styles';

interface Props extends StyleProps {
  type: NetworkType;
  disabled?: boolean;
  onClick?: (type: NetworkType) => void;
}

type NetworkType = 'facebook' | 'google' | 'linkedin';

interface IconConfig {
  title: string;
  icon: ReactNode;
  bgColor: string;
}

const getSocialButtonData = (type: NetworkType): IconConfig => {
  switch (type) {
    case 'facebook':
      return { title: 'facebook', icon: <FacebookIcon />, bgColor: colors.dodgerBlue };
    case 'google':
      return { title: 'google', icon: <GoogleIcon />, bgColor: colors.paleRed };
    case 'linkedin':
      return { title: 'linkedin', icon: <LinkedinIcon />, bgColor: colors.midBlue };
  }
};

export const SocialButton: FC<Props> = ({ style, type, disabled, onClick }) => {
  const handleClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick(type);
    }
  };

  const { icon, title, bgColor } = getSocialButtonData(type);
  const classes = useStyles(bgColor);

  return (
    <Button
      className={classes.container}
      style={style}
      disabled={disabled}
      startIcon={icon}
      variant="contained"
      onClick={handleClickButton}
    >
      {title}
    </Button>
  );
};

export type SocialButtonNetworkType = NetworkType;
export default SocialButton;
