import { SubmitButton } from 'components/Buttons/Submit';
import { View } from 'components/Common';
import React, { DragEvent, FC } from 'react';
import { ms, Style, Styles } from 'styles';

interface Props {
  style?: Style;
  onFileSelect: (result?: string | ArrayBuffer) => void;
}

export const ChooseFileBtn: FC<Props> = ({ onFileSelect, style }) => {
  const handleClick = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
  };

  const handleChange = (importFile: { target: { files: FileList } }) => {
    const file = importFile.target.files[0];
    const reg = new RegExp('/image.*/');
    if (reg.exec(file.type)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        onFileSelect(reader.result ? reader.result : undefined);
      });
      reader.readAsDataURL(file);
    }
  };

  return (
    <View style={ms(styles.container, style)}>
      <SubmitButton style={styles.btn}>{'CHOOSE FILE'}</SubmitButton>
      <input
        onChange={() => handleChange}
        onDrop={handleClick}
        style={styles.input}
        accept="image/*"
        id="icon-button-file"
        type="file"
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
    width: '148px',
    height: '34px',
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
  },
};

export default ChooseFileBtn;
