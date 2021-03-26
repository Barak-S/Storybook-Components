import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, sbStyles, Story, StoryMeta } from 'utils';

import BrandLogo, { BrandLogoProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Brand/Logo',
  component: BrandLogo,
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => (
  <View column alignItems="center">
    <BrandLogo {...args} style={sbStyles.mb10} type="icon" />
    <BrandLogo {...args} type="text" />
  </View>
);

Basic.argTypes = {
  type: {
    control: false,
  },
};
