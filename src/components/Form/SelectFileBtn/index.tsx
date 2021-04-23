import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import React, { ChangeEvent, DragEvent, FC } from 'react';
import { ms, Style, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  title?: string;
  accept?: string;
  disabled?: boolean;
  btnStyle?: Style;
  onFileSelect?: (file: File) => void;
}

export const FormSelectFileBtn: FC<Props> = ({
  style,
  btnStyle,
  title = 'CHOOSE FILE',
  accept = 'image/*',
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
    const file = e.target.files[0];
    if (/image.*/.exec(file.type)) {
      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  return (
    <View style={ms(styles.container, style)}>
      <ContainedButton disabled={disabled} style={ms(styles.btn, btnStyle)}>
        {title}
      </ContainedButton>
      <input
        onDrop={handleClick}
        style={styles.input}
        accept={accept}
        id="icon-button-file"
        type="file"
        onChange={handleChange}
      />
    </View>
  );
};

const styles: Styles = {
  container: {
    position: 'relative',
    display: 'block',
    textAlign: 'center',
  },
  btn: {
    width: '151px',
    height: '34px',
    minHeight: 34,
    fontSize: 'small',
    lineHeight: 'normal',
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: '0',
    zIndex: 9,
    cursor: 'pointer',
  },
};

export type FormSelectFileBtnProps = Props;
export default FormSelectFileBtn;
