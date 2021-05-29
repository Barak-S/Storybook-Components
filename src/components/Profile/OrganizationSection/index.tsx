import { makeStyles, Theme } from '@material-ui/core';
import { View } from 'components/Common';
import React, { FC, useState } from 'react';
import { Style, Styles } from 'styles';
import ProfileSectionFooter from '../SectionFooter';
import { isDictEmpty, validators } from 'utils';
import { Social } from 'core/api';
import ProfileOrganization from './components/OrganizationChange';
import { OrganizationEditFormData as FormData, OrganizationEditFormErrors as FormErrs } from 'components/Organization';
import { Log } from 'core';
import { stateToCurOrgData, useSelector, useStoreManager } from 'store';
import { orgItemToUpdate } from 'core/api';
import { useSnackbar } from 'components/Feedback';

const log = Log('screens.Dashboard.profile');

interface Props {
  style?: Style;
}

export const ProfileOrganizationSection: FC<Props> = ({ style }) => {
  const curOrg = useSelector(stateToCurOrgData);
  const manager = useStoreManager();
  const { showSnackbar } = useSnackbar();

  const [disabled, setDisablled] = useState(true);
  const [updateProcessing, setUpdateProcessing] = useState(false);
  const [data, setData] = useState<FormData>(orgItemToUpdate(curOrg));

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
      name: !data.name || data.name === '' ? 'An Organization Name is required' : undefined,
      country: !data.country || data.country === '' ? 'A valid Country is required' : undefined,
      state: !data.state || data.state === '' ? 'A valid State is required' : undefined,
      city: !data.city || data.city === '' ? 'A valid City is required' : undefined,
      email: validators.getEmailErr(data.email, { required: true, requiredMsg: 'An Email is required' }),
      phone: validators.getPhoneNumberErr(data.phone, { required: true, requiredMsg: 'A phone number is required' }),
    };
    return !isDictEmpty(errs) ? errs : undefined;
  };

  const handleSubmitClick = async () => {
    const curErrs = getFormErrs(data);
    if (curErrs) {
      setErrs(curErrs);
      setUpdateProcessing(false);
      setDisablled(true);
    } else {
      try {
        log.info('updating data');
        setUpdateProcessing(true);
        await manager.orgs.modifyCurrent(data);
        setUpdateProcessing(false);
        log.info('updating data done');
        showSnackbar('Updating Information Success', 'success');
      } catch (err: unknown) {
        log.err('updating data err=', err);
        setUpdateProcessing(false);
        setDisablled(true);
        showSnackbar('Updating Information Error', 'error');
      }
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
      <ProfileSectionFooter
        style={styles.btn}
        processing={updateProcessing}
        disabled={disabled}
        onSaveClick={handleSubmitClick}
      />
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
