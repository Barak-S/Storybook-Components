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
          style={{
            backgroundImage: src ? `url(${src})` : undefined,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          {!src && !processing && <LineAwesomeIcon size={48} type="plus" color={colors.marineBlue} />}
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
    position: 'absolute',
    width: '100%',
    height: '-webkit-fill-available',
    borderRadius: '100px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};

const useStyles = () =>
  makeStyles(() => ({
    iconBtn: {
      position: 'relative',
      width: `132px`,
      height: `132px`,
      border: `dashed 2px ${colors.lightPeriwinkle}`,
      backgroundColor: colors.paleGrey,
      '&:hover': {
        background: colors.paleGreyTwo,
      },
    },
  }))();

export type FormImgFileSelectRoundedBtnProps = Props;
export default FormImgFileSelectRoundedBtn;
