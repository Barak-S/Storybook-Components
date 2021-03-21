import React from 'react';
import { Story, StoryMeta } from 'utils';

import EventActivity, { ProfileFormSettingsSectionEventActivity as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/SettingsSection/components/EventActivity',
  component: EventActivity,
}))();

export const Basic: Story<Props> = args => <EventActivity {...args} />;
