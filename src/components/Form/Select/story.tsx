import React, { FC, useState } from 'react';
import { Story } from 'utils';

import FormSelect, { FormSelectProps } from '.';

interface Item {
  id: string;
  name: string;
}

const items: Item[] = [
  { id: 'first', name: 'First' },
  { id: 'second', name: 'Second' },
];

export default {
  title: 'components/Form/Select',
  component: FormSelect,
  args: {
    label: 'Select',
    options: items,
    keyExtractor: (itm: Item) => itm.id,
    titleExtractor: (itm: Item) => itm.name,
  },
};

const FormSelectTemplate: FC<Omit<FormSelectProps<Item>, 'value' | 'onChange'>> = props => {
  const [value, setValue] = useState<Item | undefined>();
  return <FormSelect<Item> {...props} value={value} onChange={setValue} />;
};

export const Basic: Story<FormSelectProps<Item>> = args => <FormSelectTemplate {...args} />;
