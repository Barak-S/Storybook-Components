import { CircularProgress } from '@material-ui/core';
import { Text, View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { ChangeEvent, DragEvent, FC } from 'react';
import { buildStyles, ClassNameProps, colors, mx, StyleProps } from 'styles';

import { FormSelectFileBtn } from '../SelectFileBtn';

interface Props extends StyleProps, ClassNameProps {
  src?: string;
  processing?: boolean;
  disabled?: boolean;
  border?: boolean;
  fullWidth?: boolean;
  onFileSelect?: (file: File) => void;
}

export const FormDragnDropImage: FC<Props> = ({
  style,
  className,
  src,
  fullWidth,
  border = true,
  processing,
  disabled,
  onFileSelect,
}) => {
  const handleClick = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
  };

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

  const styles = useStyles();

  return (
    <View
      className={className}
      style={[
        styles.container,
        fullWidth && mx.w100,
        !!src && { backgroundImage: `url(${src})` },
        border && !src && mx.border(3, 'dashed', colors.silverTwo),
        style,
      ]}
      row
    >
      <input style={styles.input} onClick={handleClick} type="file" onChange={handleChange} />
      {!processing && (
        <View style={styles.content} row alignItems="center">
          {!src && (
            <View column style={styles.iconWrap}>
              <LineAwesomeIcon
                style={styles.icon}
                size={62}
                type="image"
                color={!disabled ? colors.coolBlueTwo : colors.veryLightPinkTwo}
              />
              <Text style={[styles.iconText, disabled && { color: colors.veryLightPinkTwo }]} block>
                {'Drag an image here'}
              </Text>
            </View>
          )}
          {!src && <Text style={[styles.orText, disabled && { color: colors.veryLightPinkTwo }]}>{'Or'}</Text>}
          <FormSelectFileBtn style={styles.btnWrap} disabled={disabled} btnStyle={styles.btn} onFileSelect={onFileSelect} />
        </View>
      )}
      {processing && (
        <View style={styles.content} alignItems="center" justifyContent="center">
          <CircularProgress />
        </View>
      )}
    </View>
  );
};

const useStyles = buildStyles(({ isMobile, whenMobile }) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 200,
    height: 200,
    borderRadius: 12,
    border: `solid 1px ${colors.lightPeriwinkle}`,
    backgroundColor: colors.paleGrey,
    padding: isMobile ? '9% 10px' : '0px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: '0',
  },
  content: {
    flex: 1,
    padding: '0 16%',
    justifyContent: 'space-around',
  },
  iconWrap: {
    display: whenMobile('none') || 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 3,
    display: 'block',
  },
  iconText: {
    fontSize: '15px',
    textAlign: 'center',
    fontWeight: 500,
    width: 140,
    color: colors.brownishGrey,
  },
  orText: {
    display: whenMobile('none') || 'block',
    fontSize: '17px',
    fontWeight: 300,
    marginRight: 12,
  },
  btnWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 148,
    height: 34,
    letterSpacing: 2.25,
    padding: 0,
  },
}));

export type FormDragnDropImageProps = Props;
export default FormDragnDropImage;
