import { makeStyles, Theme } from '@material-ui/core/styles';
import { View } from 'components/Common';
import { FormImgFileSelectRoundedBtn, FormSelectFileBtn } from 'components/Form';
import { User } from 'core/api';
import { modCloudinaryUrl } from 'core/cloudinary';
import React, { FC } from 'react';
import { Style, withDensity } from 'styles';

interface Props {
  user: User;
  style?: Style;
  processing?: boolean;
  onFileSelect?: (file: File) => void;
}

export const ProfileAccountImageSection: FC<Props> = ({ style, user, processing, onFileSelect }) => {
  const classes = useStyles();
  const thumbnail = user.thumbnail
    ? modCloudinaryUrl(user.thumbnail, { transform: { width: withDensity(132), height: withDensity(132), crop: 'fill' } })
    : undefined;
  return (
    <View style={style} className={classes.avaBlock}>
      <View className={classes.avatar}>
        <FormImgFileSelectRoundedBtn
          className={classes.imgBlock}
          src={thumbnail}
          processing={processing}
          onFileSelect={onFileSelect}
        />
      </View>
      <FormSelectFileBtn title="CHOOSE IMAGE" btnStyle={{ borderRadius: 6, padding: 0 }} onFileSelect={onFileSelect} />
    </View>
  );
};

const useStyles = () =>
  makeStyles((theme: Theme) => ({
    avaBlock: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 212,
      marginTop: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginTop: 12,
      },
    },
    avatar: {
      marginBottom: '26px',
    },
    imgBlock: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '35px',
      },
    },
  }))();

export type ProfileAccountImageSectionProps = Props;
export default ProfileAccountImageSection;
