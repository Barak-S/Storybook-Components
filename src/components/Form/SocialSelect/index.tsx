import React, { FC } from 'react';
import { StyleProps } from 'styles';

import FormSelect from '../Select';

interface Props extends StyleProps {
  label: string;
  title?: string;
  placehoder?: string;
  value?: SocialNetworkType;
  className?: string;
  onChange?: (val: SocialNetworkType | undefined) => void;
}

interface SocialNetwork {
  name: string;
  type: SocialNetworkType;
}

type SocialNetworkType = 'facebook' | 'google';

const options: SocialNetwork[] = [
  { type: 'facebook', name: 'Facebook' },
  { type: 'google', name: 'Google' },
];

export const FormSocialSelect: FC<Props> = ({ style, className, title, label, placehoder, value, onChange }) => (
  <FormSelect
    className={className}
    label={label}
    style={style}
    title={title}
    placeholder={placehoder}
    value={options.find(itm => itm.type === value)}
    options={options}
    keyExtractor={itm => itm.type}
    titleExtractor={itm => itm.name}
    onChange={itm => onChange && onChange(itm.type)}
  />
);

export type FormSocialSelectNetworkType = SocialNetworkType;
export type FormSocialSelectProps = Props;
export default FormSocialSelect;
