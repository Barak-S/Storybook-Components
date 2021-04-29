import { SetupStep } from './Container';

export const onboardignSetupSteps: SetupStep[] = [
  {
    index: 0,
    title: {
      long: 'Organization information',
      short: 'Organization',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: true,
    skippable: false,
  },
  {
    index: 1,
    title: 'Invite Team Members',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: true,
    skippable: true,
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
    skippable: true,
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
    skippable: true,
  },
];
