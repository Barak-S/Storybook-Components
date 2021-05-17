import { makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles(theme);

  const thumbnail = user.thumbnail
    ? modCloudinaryUrl(user.thumbnail, { transform: { width: 100, height: 100, crop: 'fill' } })
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
      {!isMobile && (
        <FormSelectFileBtn
          title="CHOOSE IMAGE"
          btnStyle={{ borderRadius: 6, padding: 0, letterSpacing: 1.04 }}
          onFileSelect={onFileSelect}
        />
      )}
    </View>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
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
  })();

export type ProfileAccountImageSectionProps = Props;
export default ProfileAccountImageSection;
