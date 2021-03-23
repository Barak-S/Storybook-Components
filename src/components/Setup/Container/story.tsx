import { BackgroundedContainer } from 'components/Layout';
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import SetupContainer, { SetupContainerProps as Props, SetupStep } from '.';

const steps: SetupStep[] = [
  {
    index: 0,
    title: {
      long: 'Event profile information',
      short: 'Profile information',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: true,
    skippable: true,
  },
  {
    index: 1,
    title: {
      long: 'Invite Team Members',
      short: 'Team Members',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: false,
  },
  {
    index: 2,
    title: {
      long: 'Select Event Theme',
      short: 'Event Theme',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: true,
  },
  {
    index: 3,
    title: {
      long: 'Setup Event',
      short: 'Setup Event',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: false,
  },
];

export default ((): StoryMeta<Props> => ({
  title: 'components/Setup/Container',
  component: SetupContainer,
  args: {
    title: 'create your event',
    curStepIndex: 0,
    steps,
  },
  parameters: {
    layout: 'fullscreen',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => (
  <BackgroundedContainer style={{ minHeight: '100vh', justifyContent: 'flex-start' }}>
    <SetupContainer {...args} />
  </BackgroundedContainer>
);
