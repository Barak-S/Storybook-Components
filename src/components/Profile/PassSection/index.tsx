import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC, useState } from 'react';
import { Style, Styles, colors } from 'styles';
import { isDictEmpty, validators } from 'utils';
import ProfileSectionFooter from '../SectionFooter';
import PasswordChange, {
  ProfilePassSectionPasswordChangeData as FormData,
  ProfilePassSectionPasswordChangeErrs as FormErrs,
} from './components/PasswordChange';

interface Props {
  style?: Style;
}

export const ProfilePassSection: FC<Props> = ({ style }) => {
  const [data, setData] = useState<FormData>({});
  const [errs, setErrs] = useState<FormErrs | undefined>();

  const handleFormChange = (newData: Partial<FormData>) => {
    setErrs(undefined);
    setData({ ...data, ...newData });
  };

  const getFormErrs = (data: FormData): FormErrs | undefined => {
    const passesNotSameErr = data.newPass !== data.confPass ? 'Passwords should be the same' : undefined;
    const errs: FormErrs = {
      curPass: validators.getPasswordErr(data.curPass, { required: true, requiredMsg: 'Password required' }),
      newPass: validators.getPasswordErr(data.newPass, { required: true, requiredMsg: 'New password required' }),
      confPass: passesNotSameErr,
    };
    return !isDictEmpty(errs) ? errs : undefined;
  };

  const handleSubmitClick = () => {
    const curErrs = getFormErrs(data);
    if (curErrs) {
      return setErrs(curErrs);
    }
  };

  const classes = useStyles();

  const disabled = !Boolean(data.curPass) || !Boolean(data.newPass) || !Boolean(data.confPass) || Boolean(errs);

  return (
    <View style={style} className={classes.container}>
      <PasswordChange data={data} errs={errs} onChange={handleFormChange} />
      <ProfileSectionFooter style={styles.btn} onSaveClick={handleSubmitClick} disabled={disabled} />
    </View>
  );
};

const styles: Styles = {
  btn: {
    letterSpacing: '2.25px',
  },
};

const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      width: '-webkit-fill-available',
      display: 'flex',
      marginBottom: '37px',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
      '& .MuiIconButton-root': {
        color: colors.brownishGrey,
      },
    },
  }))();

export type ProfilePassSectionProps = Props;
export default ProfilePassSection;
