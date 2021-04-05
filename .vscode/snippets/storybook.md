# Storybook

**Prefix**: `psb`

**Description**: Create Storybook story

```
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import $1, { $1Props as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: '\${TM_DIRECTORY}',
  component: $1,
  args: {},
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <$1 {...args} />;
```

**Prefix**: `psbs`

**Description**: Add Storybook story

```
export const Basic: $1<Props> = props => <$2 {...props} />;
```

**Prefix**: `psbs`

**Description**: Add Storybook meta

```
export default ((): StoryMeta<Props> => ({
  title: '$1',
  component: $1,
}))();
```
