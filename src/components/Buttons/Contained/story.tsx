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
    <ContainedButton {...args}>{'Log In'}</ContainedButton>
    <ContainedButton {...args} style={sbStyles.mt10} disabled />
    <ContainedButton {...args} style={sbStyles.mt10} processing disabled />
    <ContainedButton {...args} style={sbStyles.mt10} endIcon="plus-circle" />
    <ContainedButton {...args} style={sbStyles.mt10} theme="small" endIcon="plus-circle" />
    <ContainedButton {...args} style={sbStyles.mt10} theme="small" startIcon="plus-circle" />
  </View>
);

export const Disabled: Story<Props> = args => <ContainedButton {...args} disabled />;

export const Processing: Story<Props> = args => <ContainedButton {...args} processing />;

export const PlusType: Story<Props> = args => <ContainedButton {...args} endIcon="plus-circle" />;

export const RedTheme: Story<Props> = args => <ContainedButton {...args} theme="small" />;
