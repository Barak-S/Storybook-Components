import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { Style } from 'styles';

import { FormSelectFileBtn } from '../SelectFileBtn';
import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const FormDragnDropImage: FC<Props> = ({ style }) => {
  const [imageFile, setFile] = useState('');
  const classes = useStyles();

  const handleClick = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
  };

  const handleChange = (importFile: { target: { files: FileList } }) => {
    const file = importFile.target.files[0];
    const reg = new RegExp('/image.*/');
    if (reg.exec(file.type)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setFile(String(reader.result));
      });
      reader.readAsDataURL(file);
    }
  };
  const updateData = (file: React.SetStateAction<string>) => {
    setFile(file);
  };

  return (
    <View style={style}>
      <View row className={classes.container}>
        <input onClick={handleClick} type="file" className={classes.inputFile} onChange={() => handleChange} />
        {imageFile && <img src={imageFile} className={classes.imagePrev} />}
        <View column className={classes.blockImage}>
          <View className={classes.icon}>
            <LineAwesomeIcon size={62} type="image" color="#407ec9" />
          </View>
          <span className={classes.titleInput}>{'Drag an image here'}</span>
        </View>
        <span className={classes.blockCenter}>{'Or'}</span>
        {!imageFile && <FormSelectFileBtn onFileSelect={() => updateData} />}
      </View>
      {imageFile && <FormSelectFileBtn onFileSelect={() => updateData} />}
    </View>
  );
};

export type FormDragnDropImageProps = Props;
export default FormDragnDropImage;
