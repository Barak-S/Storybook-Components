import React from 'react';

import { View } from 'components/Common';
import FolderTabs, { FolderTabsProps as Props } from './index';
import { Story, StoryMeta } from 'styles';

export default ((): StoryMeta<Props> => ({
  title: 'components/Navigation/FolderTabs',
  component: FolderTabs,
}))();

export const Basic: Story<Props> = props => (
  <View column>
    <View row>
      <FolderTabs
        {...props}
        values={[
          { id: 0, name: 'First', content: 'sdfsdf' },
          { id: 1, name: 'Second', content: '123' },
        ]}
      />
    </View>
  </View>
);
