import { LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import FormSelect from '../Select';
import { FormSelectStyledProps } from '../Select/components/Styled';

interface Props extends StyleProps {
  label: string;
  title?: string;
  placehoder?: string;
  value?: SocialNetworkType;
  className?: string;
  classes?: FormSelectStyledProps['classes'];
  iconStart?: boolean;
  onChange?: (val: SocialNetworkType | undefined) => void;
}

interface SocialNetwork {
  name: string;
  type: SocialNetworkType;
  icon?: LineAwesomeIconType;
}

type SocialNetworkType = 'facebook' | 'google' | 'twitter' | 'youtube' | 'instagram' | 'another';

const options: SocialNetwork[] = [
  { type: 'facebook', name: 'Facebook', icon: 'facebook-f' },
  { type: 'google', name: 'Google', icon: 'google' },
  { type: 'twitter', name: 'Twitter', icon: 'twitter' },
  { type: 'youtube', name: 'YouTube', icon: 'youtube' },
  { type: 'instagram', name: 'Instagram', icon: 'instagram' },
  { type: 'another', name: 'Add Another' },
];

export const FormSocialSelect: FC<Props> = ({
  style,
  className,
  classes,
  title,
  label,
  placehoder,
  value,
  iconStart,
  onChange,
}) => (
  <FormSelect
    classes={classes}
    className={className}
    label={label}
    style={style}
    title={title}
    placeholder={placehoder}
    value={options.find(itm => itm.type === value)}
    options={options}
    iconStart={iconStart}
    keyExtractor={itm => itm.type}
    titleExtractor={itm => itm.name}
    iconExtractor={itm => itm.icon}
    onChange={itm => onChange && onChange(itm.type)}
  />
);

export type FormSocialSelectNetworkType = SocialNetworkType;
export type FormSocialSelectProps = Props;
export default FormSocialSelect;
