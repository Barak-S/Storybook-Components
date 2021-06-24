import { FormControl, IconButton, MenuItem, SelectProps, TextField, FormHelperText, ClickAwayListener } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, useMemo, useState } from 'react';
import { colors, mc, mx, StyleProps, Styles } from 'styles';
import { genId } from 'utils';

type Props = StyleProps & CustomProps;

interface CustomProps extends SelectProps {
  label?: string;
  value?: string;
  options: FormSelectStyledOption[];
  className?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  classes?: {
    root?: string;
    label?: string;
    icon?: string;
    iconBtn?: string;
  };
  iconStart?: LineAwesomeIconType;
  required?: boolean;
  onChange?: (value: any) => void;
}

export interface FormSelectStyledOption {
  name?: string;
  value: unknown;
}

export const FormSelectStyled: FC<Props> = ({
  style,
  label,
  className,
  options,
  disabled,
  required,
  error,
  helperText,
  classes,
  iconStart,
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const localClasses = useStyles(Boolean(iconStart));
  const selectId = useMemo(() => genId(), []);
  const iconType = open ? 'chevron-circle-up' : 'chevron-circle-down';
  const curOpt = options.find(itm => itm.value === props.value);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <FormControl className={mc(localClasses.container, className)} style={style} onClick={() => !disabled && setOpen(!open)}>
        <TextField
          id={selectId}
          className={localClasses.select}
          label={label}
          required={required}
          disabled={disabled}
          error={error}
          autoComplete="off"
          // eslint-disable-next-line
          value={curOpt && curOpt.name ? curOpt.name : ''}
          InputProps={{
            readOnly: Boolean(true),
            inputProps: { style: styles.input },
            disableUnderline: true,
            endAdornment: (
              <IconButton className={mc(localClasses.iconBtn, classes?.iconBtn)}>
                <LineAwesomeIcon type={iconType} size={24} className={mc(localClasses.icon, classes?.icon)} />
              </IconButton>
            ),
            startAdornment: iconStart && <LineAwesomeIcon type={iconStart} size={32} className={localClasses.startIcon} />,
          }}
        />
        {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
        {open && (
          <div>
            <div className={localClasses.selectMenu}>
              {options.map(({ name, value }) => (
                <MenuItem
                  key={name}
                  value={String(value)}
                  className={value === props.value ? localClasses.selectedItem : ''}
                  onClick={e => onChange && onChange(value)}
                >
                  {name}
                </MenuItem>
              ))}
            </div>
          </div>
        )}
      </FormControl>
    </ClickAwayListener>
  );
};

const styles: Styles = {
  input: {
    fontSize: 16,
  },
};

export const useStyles = (iconStart: boolean) =>
  makeStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      '& .MuiInputBase-input': {
        marginBottom: 'auto',
        '&.MuiInputBase-inputAdornedStart': {
          paddingLeft: 50,
        },
      },
    },
    select: {
      flex: '1 0 auto',
      height: 52,
      width: '100%',
      marginBottom: 'auto',
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
      cursor: 'pointer',
      top: 0,
      right: 0,
      background: 'none',
      borderRadius: 0,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      pointerEvents: 'none',
    },
    startIcon: {
      paddingLeft: 0,
      position: 'absolute',
      top: '50%',
      zIndex: 1,
      transform: 'translate(13px, -50%)',
      pointerEvents: 'none',
      color: colors.brownishGrey,
    },
    error: {
      color: colors.error,
    },
    selectedItem: {
      color: colors.white,
      backgroundColor: colors.IRISteal,
    },
    selectMenu: {
      padding: '8px 0',
      borderRadius: 4,
      position: 'absolute',
      top: 53,
      zIndex: 1500,
      backgroundColor: colors.white,
      width: '100%',
      boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
    },
  })();

export type FormSelectStyledProps = Props;
export default FormSelectStyled;
