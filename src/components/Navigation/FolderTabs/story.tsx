import React from 'react';
import { Story, StoryMeta } from 'utils';

import FolderTabs, { FolderTabsProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Navigation/FolderTabs',
  component: FolderTabs,
}))();

export const Basic: Story<Props> = args => (
  <FolderTabs
    {...args}
    values={[
      { id: 0, name: 'First', content: 'Some First Content' },
      { id: 1, name: 'Second', content: 'Some Second Content' },
    ]}
  />
);
