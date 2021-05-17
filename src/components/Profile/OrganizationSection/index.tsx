import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC, useState } from 'react';
import { Style, Styles } from 'styles';
import ProfileSectionFooter from '../SectionFooter';
import { isDictEmpty, validators } from 'utils';
import { Social } from 'core/api';
import ProfileOrganization, {
  OrganizationChangeData as FormData,
  OrganizationChangeErrs as FormErrs,
} from './components/OrganizationChange';

interface Props {
  style?: Style;
}

export const ProfileOrganizationSection: FC<Props> = ({ style }) => {
  const [disabled, setDisablled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [data, setData] = useState<FormData>({});
  const [socialItems, setSocialItems] = useState<Social[]>([]);
  const [errs, setErrs] = useState<FormErrs | undefined>();

  const handleSocialChange = (items: Social[]) => {
    setErrs(undefined);
    setDisablled(false);
    setSocialItems(items);
  };

  const handleFormChange = (newData: Partial<FormData>) => {
    setErrs(undefined);
    setDisablled(false);
    setData({ ...data, ...newData });
  };

  const getFormErrs = (data: FormData): FormErrs | undefined => {
    const errs: FormErrs = {
      orgName: !data.orgName || data.orgName === '' ? 'An Organization Name is required' : undefined,
      country: !data.country || data.country === '' ? 'A valid Country is required' : undefined,
      state: !data.state || data.state === '' ? 'A valid State is required' : undefined,
      city: !data.city || data.city === '' ? 'A valid City is required' : undefined,
      email: validators.getEmailErr(data.email, { required: true, requiredMsg: 'An Email is required' }),
      phoneNumber: validators.getPhoneNumberErr(data.phoneNumber, { required: true, requiredMsg: 'A phone number is required' }),
    };
    return !isDictEmpty(errs) ? errs : undefined;
  };

  const handleSubmitClick = () => {
    const curErrs = getFormErrs(data);
    if (curErrs) {
      setErrs(curErrs);
      setProcessing(false);
      setDisablled(true);
    } else {
      setProcessing(true);
    }
  };

  const classes = useStyles();

  return (
    <View style={style} className={classes.container}>
      <ProfileOrganization
        data={data}
        errs={errs}
        socials={socialItems}
        onChange={handleFormChange}
        handleSocialChange={handleSocialChange}
      />
      <ProfileSectionFooter style={styles.btn} processing={processing} disabled={disabled} onSaveClick={handleSubmitClick} />
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
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        marginBottom: 37,
      },
    },
  }))();

export type ProfileOrganizationSectionProps = Props;
export default ProfileOrganizationSection;
