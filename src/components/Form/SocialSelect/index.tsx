import React, { FC } from 'react';
import { StyleProps } from 'styles';

import FormSelect, { FormSelectOption as Option } from '../Select';

interface Props extends StyleProps {
  title?: string;
  placehoder?: string;
  value?: NetworkType;
  onChange?: (val: NetworkType | undefined) => void;
}

type NetworkType = 'facebook' | 'google';

const options: Option[] = [
  { value: 0, label: 'Facebook', icon: 'facebook' },
  { value: 1, label: 'Google', icon: 'google' },
];

export const FormSocialSelect: FC<Props> = ({ style, title, placehoder, value, onChange }) => {
  const typeToOption = (val: NetworkType): Option | undefined => {
    switch (val) {
      case 'facebook':
        return options.find(itm => itm.icon === 'facebook');
      case 'google':
        return options.find(itm => itm.icon === 'google');
      default:
        return undefined;
    }
  };

  const optionToType = ({ value }: Option): NetworkType | undefined => {
    switch (value) {
      case 0:
        return 'facebook';
      case 1:
        return 'google';
      default:
        return undefined;
    }
  };

  const handleChange = (option: Option | undefined) => {
    if (onChange) {
      onChange(option ? optionToType(option) : undefined);
    }
  };

  return (
    <FormSelect
      style={style}
      title={title}
      placeholder={placehoder}
      value={value ? typeToOption(value) : undefined}
      options={options}
      onChange={handleChange}
    />
  );
};

export type FormSocialSelectNetworkType = NetworkType;
export type FormSocialSelectProps = Props;
export default FormSocialSelect;
