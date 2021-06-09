import { useSnackbar } from 'components/Feedback';
import {
  OrganizationEditForm,
  OrganizationEditFormData as FormData,
  OrganizationEditFormProcessing as FormProcessing,
} from 'components/Organization';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupContainerFooterBtnItem, SetupStep } from 'components/Setup';
import { Log } from 'core';
import { OrganizationUpdate, orgItemToUpdate } from 'core/api';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { stateToCurOrgData, useSelector, useStoreManager } from 'store';
import { StyleProps, Styles } from 'styles';

const log = Log('screens.Dashboard.Onboarding.Organization');

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingOrganizationScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const curOrg = useSelector(stateToCurOrgData);
  const manager = useStoreManager();

  useEffect(() => {
    manager.orgs.updateAndCheckCurrent();
  }, []);

  const storedData = useSelector(s => s.forms.onboarding.org);
  const [data, setData] = useState<FormData>(storedData || orgItemToUpdate(curOrg));
  const [dataProcessing, setDataProcessing] = useState<FormProcessing>({});
  const [updateProcessing, setUpdateProcessing] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const { showSnackbar } = useSnackbar();

  const history = useHistory();

  const handleDataChange = (newData: OrganizationUpdate, valid: boolean) => {
    setData(newData);
    setFormValid(valid);
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
    if (btn.id === 'back') {
      return history.push(routes.dashboard.events.list);
    }
    if (btn.id === 'save') {
      manager.forms.modify('onboarding', { org: data });
      return history.push(routes.dashboard.events.list);
    }
    if (btn.id === 'continue') {
      return handleContinueClick();
    }
  };

  const handleContinueClick = async () => {
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
      disabled: !formValid,
      processing: updateProcessing,
      endIcon: 'chevron-circle-right',
    },
  ];

  const curStepIndex = 0;

  return (
    <>
      <ScreenTitle title={steps[curStepIndex].title.short} />
      <SetupContainer
        title="Add your organization information"
        steps={steps}
        curStepIndex={curStepIndex}
        footer={{ leftBtns, rightBtns }}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <OrganizationEditForm
          style={styles.form}
          data={data}
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
  },
};

export default OnboardingOrganizationScreen;
