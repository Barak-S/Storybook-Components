import { Button } from '@material-ui/core';
import { FacebookIcon, GoogleIcon, LinkedinIcon } from 'components/Icons';
import React, { FC, MouseEvent, ReactNode } from 'react';
import { colors } from 'styles';

import { useStyles } from './styles';

type SocialNetworkType = 'facebook' | 'google' | 'linkedin';

interface SocialNetworkIconConfig {
  title: string;
  icon: ReactNode;
  bgColor: string;
}

interface Props {
  type: SocialNetworkType;
  disabled?: boolean;
  onClick?: () => void;
}

const getSocialButtonData = (type: SocialNetworkType): SocialNetworkIconConfig => {
  switch (type) {
    case 'facebook':
      return { title: 'facebook', icon: <FacebookIcon />, bgColor: colors.dodgerBlue };
    case 'google':
      return { title: 'google', icon: <GoogleIcon />, bgColor: colors.paleRed };
    case 'linkedin':
      return { title: 'linkedin', icon: <LinkedinIcon />, bgColor: colors.midBlue };
  }
};

export const SocialButton: FC<Props> = ({ type, disabled, onClick }) => {
  const handleClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const { icon, title, bgColor } = getSocialButtonData(type);
  const classes = useStyles(bgColor);

  return (
    <Button
      className={classes.root}
      disabled={disabled}
      startIcon={icon}
      variant="contained"
      onClick={handleClickButton}
    >
      {title}
    </Button>
  );
};

export default SocialButton;
