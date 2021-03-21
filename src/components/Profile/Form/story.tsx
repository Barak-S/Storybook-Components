import React from 'react';
import { Story, StoryMeta } from 'utils';

import ProfileForm, { ProfileFormProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form',
  component: ProfileForm,
}))();

export const Basic: Story<Props> = args => <ProfileForm {...args} />;
