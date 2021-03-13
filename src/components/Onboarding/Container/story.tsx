import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import OnboardingContainer, { OnboardingContainerProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Onboarding/Container',
  component: OnboardingContainer,
  args: {
    title: 'create your event',
    curStepIndex: 0,
    onCloseClick: action('onCloseClick'),
    steps: [
      {
        index: 0,
        title: 'event profile information',
        shortTitle: 'profile information',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        required: true,
      },
      {
        index: 1,
        title: 'Invite Team Members',
        shortTitle: 'Team Members',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        required: false,
      },
      {
        index: 2,
        title: 'Select Event Theme',
        shortTitle: 'Event Theme',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        required: true,
      },
      {
        index: 3,
        title: 'Setup Event',
        shortTitle: 'Setup Event',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        required: false,
      },
    ],
  },
}))();

export const Basic: Story<Props> = props => <OnboardingContainer {...props} />;
