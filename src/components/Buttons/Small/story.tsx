import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';

import SmallButton from '.';
import { colors } from 'styles';

export default {
  title: 'components/Buttons/Small',
  component: SmallButton,
};

export const Basic: FC = () => (
  <SmallButton style={{ background: colors.rustyRed }} onClick={action('onClick')} iconType="chevron-circle-right">
    {'continue'}
  </SmallButton>
);
