import React, { FC, ChangeEvent } from 'react';
import { StyleProps } from 'styles';
import FormSelect, { SelectOption as Option } from '../Select';

interface Props extends StyleProps {
  label: string;
  title?: string;
  placehoder?: string;
  value?: NetworkType;
  onChange?: (val: NetworkType | undefined) => void;
}

type NetworkType = 'facebook' | 'google';

const options: Option[] = [
  { value: 'facebook', name: 'Facebook' },
  { value: 'google', name: 'Google' },
];

export const FormSocialSelect: FC<Props> = ({ style, title, label, placehoder, value, onChange }) => {
  const typeToOption = (val: NetworkType): Option | undefined => {
    switch (val) {
      case 'facebook':
        return options.find(itm => itm.name === 'Facebook');
      case 'google':
        return options.find(itm => itm.name === 'Google');
      default:
        return undefined;
    }
  };

  const optionToType = (value: unknown): NetworkType | undefined => {
    switch (value) {
      case 'facebook':
        return 'facebook';
      case 'google':
        return 'google';
      default:
        return undefined;
    }
  };

  const handleChange = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    if (onChange) {
      onChange(optionToType(event.target.value));
    }
  };

  return (
    <FormSelect
      label={label}
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
