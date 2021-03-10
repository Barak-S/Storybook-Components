import { Button } from '@material-ui/core';
import { Image } from 'components/Common';
import React, { FC, MouseEvent, ReactNode } from 'react';
import { colors, StyleProps } from 'styles';

import facebookIcon from './assets/facebookIcon.svg';
import googleIcon from './assets/googleIcon.svg';
import linkedInIcon from './assets/linkedInIcon.svg';
import { useStyles } from './styles';

interface Props extends StyleProps {
  href?: string;
  type: NetworkType;
  disabled?: boolean;
  onClick?: (type: NetworkType) => void;
}

type NetworkType = 'facebook' | 'google' | 'linkedin';

interface IconConfig {
  title: string;
  icon: ReactNode;
  color: string;
}

const typeToConfig = (type: NetworkType): IconConfig => {
  switch (type) {
    case 'facebook':
      return { title: 'facebook', icon: <Image source={facebookIcon} />, color: colors.dodgerBlue };
    case 'google':
      return { title: 'google', icon: <Image source={googleIcon} />, color: colors.paleRed };
    case 'linkedin':
      return { title: 'linkedin', icon: <Image source={linkedInIcon} />, color: colors.midBlue };
  }
};

export const SocialButton: FC<Props> = ({ style, type, href, disabled, onClick }) => {
  const handleClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    if (!href && onClick) {
      event.preventDefault();
      onClick(type);
    }
  };

  const { icon, title, color } = typeToConfig(type);
  const classes = useStyles(color);

  return (
    <Button
      className={classes.container}
      style={style}
      disabled={disabled}
      href={href}
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
