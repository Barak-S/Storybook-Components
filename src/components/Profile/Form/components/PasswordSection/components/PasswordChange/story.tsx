import React from 'react';
import { Story, StoryMeta } from 'styles';

import Change, { ProfileFormPasswordSectionPasswordChangeProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/PasswordSection/components/Change',
  component: Change,
}))();

export const Basic: Story<Props> = args => <Change {...args} />;
