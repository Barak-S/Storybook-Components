import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, sbStyles, Story, StoryMeta } from 'utils';

import ContainedButton, { ContainedButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/Contained',
  component: ContainedButton,
  args: {
    children: 'Log In',
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => (
  <View column>
    <ContainedButton {...args} style={sbStyles.mb30}>
      {'Log In'}
    </ContainedButton>
    <ContainedButton {...args} style={sbStyles.mb10} size="small" disabled />
    <ContainedButton {...args} style={sbStyles.mb10} size="small" processing />
    <ContainedButton {...args} style={sbStyles.mb10} size="small" endIcon="plus-circle" />
    <ContainedButton {...args} style={sbStyles.mb10} size="small" startIcon="plus-circle" />
    <ContainedButton {...args} style={sbStyles.mb30} size="small" color="red" />
    <ContainedButton {...args} style={sbStyles.mb10} disabled />
    <ContainedButton {...args} style={sbStyles.mb10} processing />
    <ContainedButton {...args} style={sbStyles.mb10} endIcon="plus-circle" />
    <ContainedButton {...args} style={sbStyles.mb10} startIcon="plus-circle" />
    <ContainedButton {...args} color="red" />
  </View>
);

export const Disabled: Story<Props> = args => <ContainedButton {...args} disabled />;

export const Processing: Story<Props> = args => <ContainedButton {...args} processing />;

export const PlusType: Story<Props> = args => <ContainedButton {...args} endIcon="plus-circle" />;
