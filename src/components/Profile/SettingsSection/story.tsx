import React from 'react';
import { Story, StoryMeta } from 'utils';

import ProfileSettingsSection, { ProfileSettingsSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/SettingsSection',
  component: ProfileSettingsSection,
}))();

export const Basic: Story<Props> = args => <ProfileSettingsSection {...args} />;
