import { Text } from 'components/Common';
import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';
import { action } from '@storybook/addon-actions';

import Accordion, { AccordionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Navigation/Accordion',
  component: Accordion,
  args: {
    style: { width: 300 },
    id: 'accordion',
    title: 'Accordion',
    expanded: false,
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const AccordionTemplate: FC<Omit<Props, 'onChange'>> = ({ expanded: inputValue, ...props }) => {
  const [value, setValue] = useState<boolean>(inputValue);
  const handleChange = (newValue: boolean) => {
    action('onChange')(newValue);
    setValue(newValue);
  };
  return <Accordion {...props} expanded={value} onChange={handleChange} />;
};

export const Basic: Story<Props> = args => (
  <AccordionTemplate {...args}>
    <Text>{'Hello world'}</Text>
  </AccordionTemplate>
);

Basic.argTypes = {
  expanded: { control: false },
};

export const Expanded: Story<Props> = args => (
  <AccordionTemplate {...args}>
    <Text>{'Hello world'}</Text>
  </AccordionTemplate>
);

Expanded.args = {
  expanded: true,
};
Expanded.argTypes = {
  expanded: { control: false },
};
