import { useSnackbar } from 'components/Feedback';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupContainerFooterBtnItem, SetupStep } from 'components/Setup';
import { Log } from 'core';
import { OrganizationUpdate, OrganizationUpdateSchema, orgItemToUpdate } from 'core/api';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { stateToCurOrgData, useSelector, useStoreManager } from 'store';
import { StyleProps, Styles } from 'styles';
import { GenericFormData, GenericFormErrors, GenericFormProcessing, getFromErrsCheckerWithSchema } from 'utils';

import OnboardingOrganizationScreenForm from './components/Form';

const log = Log('screens.OnboardingOrganization');

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

type FormData = GenericFormData<OrganizationUpdate>;
type FormProcessing = GenericFormProcessing<OrganizationUpdate>;
type FormErrors = GenericFormErrors<OrganizationUpdate>;

const getFormErrors = getFromErrsCheckerWithSchema<OrganizationUpdate>(OrganizationUpdateSchema);

export const OnboardingOrganizationScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const curOrg = useSelector(stateToCurOrgData);
  const manager = useStoreManager();
  const { showSnackbar } = useSnackbar();

  const [data, setData] = useState<FormData>(orgItemToUpdate(curOrg));
  const [dataProcessing, setDataProcessing] = useState<FormProcessing>({});
  const [errors, setErrors] = useState<FormErrors | undefined>();
  const [updateProcessing, setUpdateProcessing] = useState<boolean>(false);

  const history = useHistory();

  const handleDataChange = (newData: OrganizationUpdate) => {
    setErrors({});
    setData({ ...data, ...newData });
  };

  const handleLogoFileSelect = async (file: File) => {
    try {
      log.info('uploading logo');
      setDataProcessing(v => ({ ...v, logo: true }));
      const { data: imgData } = await manager.api.assets.uploadImage(file);
      setDataProcessing(v => ({ ...v, logo: false }));
      log.info('uploading logo done');
      setData(v => ({ ...v, logo: imgData.url }));
    } catch (err: unknown) {
      setDataProcessing(v => ({ ...v, logo: false }));
      log.err('uploading logo err=', err);
      showSnackbar('Uploading logo error', 'error');
    }
  };

  const handleFooterBtnClick = async (btn: SetupContainerFooterBtnItem) => {
    if (btn.id === 'continue') {
      handleContinueClick();
    }
    if (btn.id === 'back') {
      history.push(routes.dashboard.events.list);
    }
    if (btn.id === 'save') {
      history.push(routes.dashboard.events.list);
    }
  };

  const handleContinueClick = async () => {
    const curErrs = getFormErrors(data);
    if (curErrs) {
      return setErrors(curErrs);
    }
    try {
      log.info('updating data');
      setUpdateProcessing(true);
      await manager.orgs.modifyCurrent(data);
      setUpdateProcessing(false);
      log.info('updating data done');
      await manager.user.modifySettings({ onboarding: 'team' });
      history.push(routes.dashboard.onboarding.team);
    } catch (err: unknown) {
      log.err('updating data err=', err);
      setUpdateProcessing(false);
      showSnackbar('Updating information error', 'error');
    }
  };

  const saveAllowed = Boolean(data.name && data.phone && data.country && data.state && data.city);

  const leftBtns: SetupContainerFooterBtnItem[] = [
    {
      id: 'back',
      type: 'contained',
      title: 'back',
      startIcon: 'chevron-circle-left',
    },
  ];

  const rightBtns: SetupContainerFooterBtnItem[] = [
    {
      id: 'save',
      type: 'text',
      title: 'Save & Continue Later',
    },
    {
      id: 'continue',
      type: 'contained',
      title: 'continue',
      disabled: !saveAllowed,
      processing: updateProcessing,
      endIcon: 'chevron-circle-right',
    },
  ];

  return (
    <>
      <ScreenTitle title="Organization information" />
      <SetupContainer
        title="Add your organization information"
        steps={steps}
        curStepIndex={0}
        footer={{ leftBtns, rightBtns }}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <OnboardingOrganizationScreenForm
          style={styles.form}
          data={data}
          errors={errors}
          processing={dataProcessing}
          onChange={handleDataChange}
          onLogoFileSelect={handleLogoFileSelect}
        />
      </SetupContainer>
    </>
  );
};

const styles: Styles = {
  form: {
    width: '100%',
    maxWidth: 535,
  },
};

export default OnboardingOrganizationScreen;
