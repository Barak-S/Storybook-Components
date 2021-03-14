import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import React, { ChangeEventHandler, DragEvent, FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { dataOrUndef } from 'utils';

interface Props extends StyleProps {
  title?: string;
  accept?: string;
  onFileSelect: (result?: string | ArrayBuffer) => void;
}

export const FormSelectFileButton: FC<Props> = ({ style, title = 'CHOOSE FILE', accept = 'image/*', onFileSelect }) => {
  const handleClick = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = () => (importFile: { target: { files: FileList } }) => {
    const file = importFile.target.files[0];
    const reg = new RegExp('/image.*/');
    if (reg.exec(file.type)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        onFileSelect(dataOrUndef(reader.result));
      });
      reader.readAsDataURL(file);
    }
  };

  return (
    <View style={ms(styles.container, style)}>
      <ContainedButton style={styles.btn}>{title}</ContainedButton>
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

export type FormSelectFileButtonProps = Props;
export default FormSelectFileButton;
