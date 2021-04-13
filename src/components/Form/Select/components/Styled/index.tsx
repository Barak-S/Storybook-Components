import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useMemo, useState } from 'react';
import { mc, StyleProps } from 'styles';
import { genId } from 'utils';

type Props = StyleProps & CustomProps;

interface CustomProps extends SelectProps {
  label?: string;
  options: FormSelectStyledOption[];
  className?: string;
  disabled?: boolean;
  classes?: {
    root?: string;
    label?: string;
    icon?: string;
  };
}

export interface FormSelectStyledOption {
  name?: string | undefined;
  value: unknown;
}

export const FormSelectStyled: FC<Props> = ({ label, className, options, disabled, classes, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const localClasses = useStyles();
  const selectId = useMemo(() => genId(), []);
  const iconType = open ? 'chevron-circle-up' : 'chevron-circle-down';

  return (
    <FormControl className={mc(localClasses.container, className)}>
      {!!label && <InputLabel id={selectId}>{label}</InputLabel>}
      <Select
        className={localClasses.select}
        labelId={selectId}
        {...props}
        disabled={disabled}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        classes={{
          icon: localClasses.nativeIcon,
          root: mc(localClasses.selectRoot, classes?.root),
        }}
      >
        {options.map(({ value }) => (
          <MenuItem key={String(value)} value={String(value)}>
            {String(value)}
          </MenuItem>
        ))}
      </Select>
      <LineAwesomeIcon type={iconType} size={24} className={mc(localClasses.icon, classes?.icon)} />
    </FormControl>
  );
};

export const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 52,
    display: 'flex',
    flexDirection: 'column',
  },
  select: {
    height: '100%',
    flex: '1 0 auto',
  },
  selectRoot: {
    height: '100%',
    borderRadius: 12,
    '&.MuiSelect-select.MuiSelect-select': {
      paddingRight: 45,
    },
    '&:focus': {
      borderRadius: 12,
    },
  },
  nativeIcon: {
    display: 'none',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: 14,
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  },
});

export type FormSelectStyledProps = Props;
export default FormSelectStyled;
