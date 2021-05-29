import React, { FC } from 'react';

import FormChipInput, { FormChipInputCommonProps, FormChipInputItem } from '../ChipInput';

interface Props extends FormChipInputCommonProps {
  items?: string[];
  onChange?: (items: string[]) => void;
}

export const FormTagsInput: FC<Props> = ({ items = [], onChange, ...commonProps }) => {
  const handleChante = (newItems: FormChipInputItem[]) => {
    onChange && onChange(newItems.map(itm => itm.label));
  };

  return <FormChipInput items={items.map(itm => ({ key: itm, label: itm }))} onChange={handleChante} {...commonProps} />;
};

export type FormTagsInputProps = Props;
export default FormTagsInput;
