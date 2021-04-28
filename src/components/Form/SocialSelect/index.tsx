import { LineAwesomeIconType } from 'components/Icons';
import { SocialType } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import FormSelect from '../Select';
import { FormSelectStyledProps } from '../Select/components/Styled';

interface Props extends StyleProps {
  label?: string;
  title?: string;
  placehoder?: string;
  fullWidth?: boolean;
  value?: SocialType;
  className?: string;
  classes?: FormSelectStyledProps['classes'];
  iconStartVisisble?: boolean;
  onChange?: (val: SocialType | undefined) => void;
}

interface SocialNetwork {
  name: string;
  type: SocialType;
  icon?: LineAwesomeIconType;
}

const options: SocialNetwork[] = [
  { type: 'facebook', name: 'Facebook', icon: 'facebook-f' },
  { type: 'google', name: 'Google', icon: 'google' },
  { type: 'linkedin', name: 'LinkedIn', icon: 'linkedin' },
  { type: 'twitter', name: 'Twitter', icon: 'twitter' },
  { type: 'youtube', name: 'YouTube', icon: 'youtube' },
  { type: 'instagram', name: 'Instagram', icon: 'instagram' },
  { type: 'custom', name: 'Custom', icon: 'globe' },
];

export const FormSocialSelect: FC<Props> = ({
  style,
  className,
  classes,
  title,
  label,
  placehoder,
  value,
  fullWidth,
  iconStartVisisble = true,
  onChange,
}) => (
  <FormSelect
    classes={classes}
    className={className}
    label={label}
    style={style}
    title={title}
    fullWidth={fullWidth}
    placeholder={placehoder}
    value={options.find(itm => itm.type === value)}
    options={options}
    iconStartVisisble={iconStartVisisble}
    keyExtractor={itm => itm.type}
    titleExtractor={itm => itm.name}
    iconExtractor={itm => itm.icon}
    onChange={itm => onChange && onChange(itm.type)}
  />
);

export type FormSocialSelectProps = Props;
export default FormSocialSelect;
