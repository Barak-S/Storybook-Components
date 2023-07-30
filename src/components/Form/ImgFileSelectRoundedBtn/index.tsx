import { CircularProgress, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { LineAwesomeIcon } from 'components/Icons';
import React, { ChangeEvent, FC, useMemo } from 'react';
import { ClassNameProps, colors, ms, StyleProps, Styles } from 'styles';
import { genId } from 'utils';

interface Props extends StyleProps, ClassNameProps {
  src?: string;
  placeholder?: string;
  processing?: boolean;
  disabled?: boolean;
  onFileSelect?: (file: File) => void;
}

export const FormImgFileSelectRoundedBtn: FC<Props> = ({
  className,
  disabled,
  onFileSelect,
  placeholder = 'Upload picture',
  processing,
  src,
  style,
}) => {
  const id = useMemo(() => genId(), []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    if (onFileSelect) {
      const file = e.target.files[0];
      if (/image.*/.exec(file.type)) {
        onFileSelect(file);
      }
    }
  };

  const classes = useStyles();

  return (
    <div style={ms(styles.container, style)} className={className}>
      <input style={styles.input} onChange={handleChange} accept="image/*" id={id} type="file" />
      <label style={styles.label} htmlFor={id}>
        <IconButton
          className={classes.iconBtn}
          disabled={processing || disabled}
          aria-label={placeholder}
          component="span"
          style={ms(styles.preview, {
            backgroundImage: src ? `url(${src})` : undefined,
            border: !src ? `dashed 2px ${colors.lightPeriwinkle}` : undefined,
          })}
        >
          {!src && !processing && <LineAwesomeIcon size={48} type="plus" color={colors.steal} />}
          {processing && <CircularProgress size={36} color="secondary" />}
        </IconButton>
      </label>
    </div>
  );
};

const styles: Styles = {
  container: {
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  input: {
    display: 'none',
  },
  label: {},
  preview: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 132,
    width: 132,
    borderRadius: 100,
  },
};

const useStyles = () =>
  makeStyles(() => ({
    iconBtn: {
      position: 'relative',
      width: `132px`,
      height: `132px`,
      backgroundColor: colors.paleGrey,
      '&:hover': {
        background: colors.paleGreyTwo,
      },
    },
  }))();

export type FormImgFileSelectRoundedBtnProps = Props;
export default FormImgFileSelectRoundedBtn;
