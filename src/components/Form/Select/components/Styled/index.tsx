import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, useMemo, useState } from 'react';
import { colors, mc, mx, StyleProps } from 'styles';
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
    iconBtn?: string;
  };
  iconStart?: LineAwesomeIconType;
}

export interface FormSelectStyledOption {
  name?: string | undefined;
  value: unknown;
}

export const FormSelectStyled: FC<Props> = ({ label, className, options, disabled, classes, iconStart, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const localClasses = useStyles(Boolean(iconStart));
  const selectId = useMemo(() => genId(), []);
  const iconType = open ? 'chevron-circle-up' : 'chevron-circle-down';

  return (
    <FormControl className={mc(localClasses.container, className)}>
      {!!label && (
        <InputLabel className={classes?.label} id={selectId}>
          {label}
        </InputLabel>
      )}
      {iconStart && <LineAwesomeIcon type={iconStart} size={32} className={localClasses.startIcon} />}
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
      <IconButton className={mc(localClasses.iconBtn, classes?.iconBtn)}>
        <LineAwesomeIcon type={iconType} size={24} className={mc(localClasses.icon, classes?.icon)} />
      </IconButton>
    </FormControl>
  );
};

export const useStyles = (iconStart: boolean) =>
  makeStyles({
    container: {
      width: '100%',
      height: 52,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
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
        ...(iconStart && { paddingLeft: 50 }),
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
    iconBtn: {
      ...mx.square(52),
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'none',
      borderRadius: 0,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      pointerEvents: 'none',
    },
    startIcon: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(13px, -50%)',
      pointerEvents: 'none',
      ...mx.zIndex.overBase,
      color: colors.brownishGrey,
    },
  })();

export type FormSelectStyledProps = Props;
export default FormSelectStyled;
