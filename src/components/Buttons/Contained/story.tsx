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
    ...sbAutoDetectActionProps,
  },
}))();

export const Basic: Story<Props> = props => (
  <View column>
    <ContainedButton {...props}>{'Log In'}</ContainedButton>
    <ContainedButton {...props} style={sbStyles.rowIndent} disabled />
    <ContainedButton {...props} style={sbStyles.rowIndent} processing disabled />
    <ContainedButton {...props} style={sbStyles.rowIndent} type="plus" />
    <ContainedButton {...props} style={sbStyles.rowIndent} theme="red" type="plus" />
  </View>
);

export const Disabled: Story<Props> = props => <ContainedButton {...props} disabled />;

export const Processing: Story<Props> = props => <ContainedButton {...props} processing />;

export const PlusType: Story<Props> = props => <ContainedButton {...props} type="plus" />;

export const RedTheme: Story<Props> = props => <ContainedButton {...props} theme="red" />;
