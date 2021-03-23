import React, { FC, useState, useEffect } from 'react';
import { useStyles } from './styles';
import { LineAwesomeIcon } from 'components/Icons';
import IconButton from '@material-ui/core/IconButton';
import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  isUpload?: boolean;
  image?: string;
  className?: string;
}

export const FormUploadBtn: FC<Props> = ({ image, className, isUpload }) => {
  const [, setColor] = useState(colors.marineBlue);
  const [imageFile, setFile] = useState('');
  const classes = useStyles();

  useEffect(() => {
    image ? setFile(image) : null;
  });

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

  return (
    <div className={mc(classes.container, className)}>
      {isUpload && (
        <input onChange={() => handleChange} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      )}
      <label htmlFor="icon-button-file">
        <IconButton
          className={classes.iconBtn}
          aria-label="upload picture"
          component="span"
          onMouseEnter={() => setColor(colors.marineBlue)}
          onMouseLeave={() => setColor(colors.marineBlue)}
        >
          {imageFile && <img src={imageFile} className={`${classes.imagePrev}`} />}
          <LineAwesomeIcon size={48} type="plus" color={colors.marineBlue} />
        </IconButton>
      </label>
    </div>
  );
};

export type FormUploadBtnProps = Props;
export default FormUploadBtn;
