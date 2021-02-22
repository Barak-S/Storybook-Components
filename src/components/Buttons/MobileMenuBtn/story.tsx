import React, { useState, FC } from 'react';
import { action } from '@storybook/addon-actions';

import MobileMenuBtn, { MobileMenuBtnProps } from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Buttons/MobileMenuBtn',
  component: MobileMenuBtn,
};

const MobileMenuBtnWrap: FC<Omit<MobileMenuBtnProps, 'onClick' | 'open'>> = props => {
  const [open, setOpen] = useState<boolean>(false);

  const handleChangeVisibleClick = () => {
    action('onClick')();
    setOpen(open => !open);
  };

  return <MobileMenuBtn onClick={handleChangeVisibleClick} open={open} {...props} />;
};

export const Basic = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <View style={{ width: 16, height: 16, marginBottom: 20 }}>
      <MobileMenuBtnWrap size={16} lgHidden={false} />
    </View>
    <View style={{ width: 32, marginBottom: 20 }}>
      <MobileMenuBtnWrap size={32} lgHidden={false} style={{ marginBottom: 20 }} />
    </View>
    <View style={{ width: 64, marginBottom: 20 }}>
      <MobileMenuBtnWrap size={64} lgHidden={false} style={{ marginBottom: 20 }} />
    </View>
  </View>
);
