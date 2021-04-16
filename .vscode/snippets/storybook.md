# Storybook

**Prefix**: `psb`

**Description**: Create Storybook story

```typescript
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import $1, { $1Props as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: '\${TM_DIRECTORY}',
  component: $1,
  args: {},
  argTypes: {},
  parameters: {
    layout: 'centered',
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

```typescript
export default ((): StoryMeta<Props> => ({
  title: '$1',
  component: $1,
}))();
```

**Prefix**: `psbt`

**Description**: Add Storybook component template

```typescript
const $1Template: FC<Omit<Props, 'onChange'>> = ({ value: inputValue, ...props }) => {
  const [value, setValue] = useState<$2>(inputValue);
  const handleChange = (newValue: $2) => {
    action('onChange')(newValue);
    setValue(newValue);
  };
  return <$1 {...props} value={value} onChange={handleChange} />;
};
```

**Prefix**: `psbima`

**Description**: Import Storybook actions

```typescript
import { action } from '@storybook/addon-actions';
```
