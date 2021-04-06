import { useMediaQuery, useTheme } from '@material-ui/core';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { colors, mc, StyleProps, Styles } from 'styles';

import { FormSelectFileBtn } from '../SelectFileBtn';
import { useStyles } from './styles';

interface Props extends StyleProps {
  className?: string;
}

export const FormDragnDropImage: FC<Props> = ({ style, className }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [imageFile, setFile] = useState('');

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
    <View className={mc(classes.container, className)} style={style} row>
      <input onClick={handleClick} type="file" className={classes.inputFile} onChange={() => handleChange} />
      {imageFile && <img src={imageFile} className={classes.imagePrev} />}
      {!isMobile && (
        <>
          <View column className={classes.blockImage}>
            <View className={classes.icon}>
              <LineAwesomeIcon size={62} type="image" color={colors.coolBlueTwo} />
            </View>
            <span className={classes.titleInput}>{'Drag an image here'}</span>
          </View>
          <span className={classes.blockCenter}>{'Or'}</span>
        </>
      )}
      {!imageFile && <FormSelectFileBtn onFileSelect={() => updateData} btnStyle={styles.btn} />}
    </View>
  );
};

const styles: Styles = {
  btn: {
    width: 148,
    height: 34,
    letterSpacing: 2.25,
  },
};

export type FormDragnDropImageProps = Props;
export default FormDragnDropImage;
