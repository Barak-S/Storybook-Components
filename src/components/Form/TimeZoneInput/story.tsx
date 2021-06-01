import React, { FC, useState } from 'react';
import { getCurTimeZoneCode, sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormTimeZoneInput, { FormTimeZoneInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/TimeZoneInput',
  component: FormTimeZoneInput,
  args: {
    style: { width: 300 },
    value: getCurTimeZoneCode(),
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormTimeZoneInputTemplate: FC<Omit<Props, 'onChange'>> = ({ value: initValue, ...props }) => {
  const [value, setValue] = useState<string>(initValue || '');
  return <FormTimeZoneInput {...props} value={value} onChange={v => setValue(v)} />;
};

export const Basic: Story<Props> = args => <FormTimeZoneInputTemplate {...args} />;
