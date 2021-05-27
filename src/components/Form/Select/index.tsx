import { LineAwesomeIconType } from 'components/Icons';
import { isString } from 'lodash';
import React, { PureComponent } from 'react';
import { ClassNameProps, StyleProps } from 'styles';
import FormSelectStyled, { FormSelectStyledProps } from './components/Styled';

interface CommonProps extends StyleProps, ClassNameProps {
  label?: string;
  title?: string;
  name?: string;
  placeholder?: string;
  fullWidth?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  classes?: FormSelectStyledProps['classes'];
  iconStartVisisble?: boolean;
}

interface Props<T> extends CommonProps {
  options: T[];
  value?: T;
  iconExtractor?: (v: T) => LineAwesomeIconType | undefined;
  keyExtractor: (v: T) => string;
  titleExtractor: (v: T) => string;
  onChange?: (v: T) => void;
}

export class FormSelect<T> extends PureComponent<Props<T>> {
  constructor(props: Props<T>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(value: string | undefined) {
    const { options, keyExtractor, onChange } = this.props;
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
      iconExtractor,
      required,
      error,
      helperText,
      disabled,
      title,
      name,
      placeholder,
      classes,
      iconStartVisisble,
    } = this.props;
    return (
      <FormSelectStyled
        classes={classes}
        className={className}
        style={style}
        label={label}
        disabled={disabled}
        required={required}
        helperText={helperText}
        error={error}
        name={name}
        placeholder={placeholder}
        options={options.map(itm => ({ name: titleExtractor(itm), value: keyExtractor(itm) }))}
        value={value ? keyExtractor(value) : ''}
        iconStart={iconStartVisisble && value ? iconExtractor && iconExtractor(value) : undefined}
        onChange={this.handleChange}
      />
    );
  }
}

export type FormSelectProps<T> = Props<T>;
export type FormSelectCommonProps = CommonProps;
export default FormSelect;
