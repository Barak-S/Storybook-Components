import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, sbStyles, Story, StoryMeta } from 'styles';

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
    <ContainedButton {...args} style={sbStyles.rowIndent} disabled />
    <ContainedButton {...args} style={sbStyles.rowIndent} processing disabled />
    <ContainedButton {...args} style={sbStyles.rowIndent} type="plus" />
    <ContainedButton {...args} style={sbStyles.rowIndent} theme="red" type="plus" />
  </View>
);

export const Disabled: Story<Props> = args => <ContainedButton {...args} disabled />;

export const Processing: Story<Props> = args => <ContainedButton {...args} processing />;

export const PlusType: Story<Props> = args => <ContainedButton {...args} type="plus" />;

export const RedTheme: Story<Props> = args => <ContainedButton {...args} theme="red" />;
