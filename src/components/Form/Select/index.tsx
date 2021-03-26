import { isString } from 'lodash';
import React, { ChangeEvent, PureComponent } from 'react';
import { ClassNameProps, StyleProps } from 'styles';

import FormSelectStyled from './components/Styled';

interface Props<T> extends StyleProps, ClassNameProps {
  label: string;
  options: T[];
  value?: T;
  title?: string;
  name?: string;
  placeholder?: string;
  fullWidth?: boolean;
  required?: boolean;
  keyExtractor: (v: T) => string;
  titleExtractor: (v: T) => string;
  onChange?: (v: T) => void;
}

export class FormSelect<T> extends PureComponent<Props<T>> {
  constructor(props: Props<T>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  private handleChange(e: ChangeEvent<{ name?: string; value: unknown }>) {
    const { options, keyExtractor, onChange } = this.props;
    const { value } = e.target;
    if (!isString(value)) {
      return;
    }
    const item = options.find(itm => keyExtractor(itm) === value);
    if (item && onChange) {
      onChange(item);
    }
  }

  render() {
    const {
      className,
      style,
      label,
      value,
      options,
      keyExtractor,
      titleExtractor,
      fullWidth,
      required,
      title,
      name,
      placeholder,
    } = this.props;
    return (
      <FormSelectStyled
        className={className}
        style={style}
        label={label}
        fullWidth={fullWidth}
        required={required}
        title={title}
        name={name}
        placeholder={placeholder}
        options={options.map(itm => ({ name: titleExtractor(itm), value: keyExtractor(itm) }))}
        value={value ? keyExtractor(value) : ''}
        onChange={this.handleChange}
      />
    );
  }
}

export type FormSelectProps<T> = Props<T>;
export default FormSelect;
