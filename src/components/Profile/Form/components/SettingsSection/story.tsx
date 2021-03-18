import React from 'react';
import { Story, StoryMeta } from 'styles';

import ProfileFormSettingsSection, { ProfileFormSettingsSectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/SettingsSection',
  component: ProfileFormSettingsSection,
}))();

export const Basic: Story<Props> = args => <ProfileFormSettingsSection {...args} />;
