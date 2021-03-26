import { Image } from 'components/Common';
import React, { FC } from 'react';
import { ClassNameProps, mc, StyleProps } from 'styles';
import { select } from 'utils';

import textLogoImg from './assets/logoWithTitle.png';
import logoSquareImg from './assets/logoSquare.png';

interface Props extends StyleProps, ClassNameProps {
  type?: BrandLogoType;
}

type BrandLogoType = 'icon' | 'text';

export const BrandLogo: FC<Props> = ({ style, type = 'text', className }) => {
  const source = select(type, {
    text: textLogoImg,
    icon: logoSquareImg,
  });
  return <Image className={mc(className)} style={style} source={source} />;
};

export type BrandLogoProps = Props;
export default BrandLogo;