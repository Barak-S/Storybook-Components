import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  expanded?: boolean;
  hovered?: boolean;
}

export const NavigationAccordionIcon: FC<Props> = ({ style, expanded, hovered }) => {
  const color = expanded ? colors.steal : colors.textGray;
  let transform: string = 'rotate(0deg)';
  if (hovered) {
    transform = 'rotate(90deg)';
  }
  if (expanded) {
    transform = 'rotate(270deg)';
  }
  return <LineAwesomeIcon type="chevron-circle-right" style={ms(styles.container, { color, transform }, style)} />;
};

const styles: Styles = {
  container: {
    transition: 'all .3s ease-in-out',
  },
};

export type NavigationAccordionIconProps = Props;
export default NavigationAccordionIcon;
