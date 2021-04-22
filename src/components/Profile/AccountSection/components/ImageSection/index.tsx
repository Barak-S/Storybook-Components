import { View } from 'components/Common';
import { FormSelectFileBtn, FormUploadBtn } from 'components/Form';
import React, { FC, useState } from 'react';
import { Style } from 'styles';
import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfileAccountImageSection: FC<Props> = ({ style }) => {
  const [imageFile, setFile] = useState('');
  const classes = useStyles();

  const updateData = (file: React.SetStateAction<string>) => {
    setFile(file);
  };

  return (
    <View style={style} className={classes.avaBlock}>
      <View className={classes.avatar}>
        <FormUploadBtn isUpload image={imageFile} className={classes.imgBlock} />
      </View>
      <FormSelectFileBtn onFileSelect={() => updateData} title="CHOOSE IMAGE" btnStyle={{ borderRadius: 6 }} />
    </View>
  );
};

export type ProfileAccountImageSectionProps = Props;
export default ProfileAccountImageSection;
