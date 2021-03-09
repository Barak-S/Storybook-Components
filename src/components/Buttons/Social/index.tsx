import { Button } from '@material-ui/core';
import { Image } from 'components/Common';
import React, { FC, MouseEvent, ReactNode } from 'react';
import { colors, StyleProps } from 'styles';

import facebookIcon from './assets/facebookIcon.svg';
import googleIcon from './assets/googleIcon.svg';
import linkedInIcon from './assets/linkedInIcon.svg';
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
      return { title: 'facebook', icon: <Image source={facebookIcon} />, bgColor: colors.dodgerBlue };
    case 'google':
      return { title: 'google', icon: <Image source={googleIcon} />, bgColor: colors.paleRed };
    case 'linkedin':
      return { title: 'linkedin', icon: <Image source={linkedInIcon} />, bgColor: colors.midBlue };
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
export type SocialButtonProps = Props;
export default SocialButton;
