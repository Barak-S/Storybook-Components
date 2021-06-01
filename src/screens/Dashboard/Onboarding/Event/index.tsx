import {
  EventBasicCreateFrom,
  EventBasicCreateFromData as FormData,
  EventBasicCreateFromErrors as FormErrors,
  EventBasicCreateFromProcessing as FormProcessing,
} from 'components/Event';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupContainerFooterBtnItem, SetupStep } from 'components/Setup';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { StyleProps } from 'styles';
import { isEventCreate } from 'core/api';
import { Log } from 'core';
import { useSelector, useStoreManager } from 'store';
import { useSnackbar } from 'components/Feedback';
import { errToStr, getCurTimeZoneCode } from 'utils';

const log = Log('screens.Dashboard.Onboarding.Event');

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingEventScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const history = useHistory();

  const manager = useStoreManager();
  const themeId = useSelector(s => s.forms.onboarding.theme?.id);
  const storedData = useSelector(s => s.forms.onboarding.event);

  const getDefFormData = (): FormData => ({ timezone: getCurTimeZoneCode() });

  const [data, setData] = useState<FormData>(storedData || getDefFormData());
  const [errors, setErrors] = useState<FormErrors | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [formProcessing, setFormProcessing] = useState<FormProcessing | undefined>();
  const { showSnackbar } = useSnackbar();

  const handleDataChange = (newData: Partial<FormData>) => {
    setErrors(undefined);
    setData(v => ({ ...v, ...newData }));
  };

  const handleFooterBtnClick = async (btn: SetupContainerFooterBtnItem) => {
    if (btn.id === 'back') {
      return history.push(routes.dashboard.onboarding.theme);
    }
    if (btn.id === 'save') {
      manager.forms.modify('onboarding', { event: data });
      return history.push(routes.dashboard.events.list);
    }
    if (btn.id === 'complete') {
      return handleSubmit();
    }
  };

  const handleLogoFileSelect = async (file: File) => {
    try {
      log.info('uploading logo');
      setFormProcessing({ profile: { logo: true } });
      const { data: imgData } = await manager.api.assets.uploadImage(file);
      setFormProcessing({ profile: { logo: false } });
      log.info('uploading logo done');
      const profile = data.profile ? { ...data.profile, logo: imgData.url } : { logo: imgData.url };
      setData(v => ({ ...v, profile }));
    } catch (err: unknown) {
      setFormProcessing({ profile: { logo: false } });
      log.err('uploading logo err=', err);
      showSnackbar('Uploading logo error', 'error');
    }
  };

  const handleSubmit = async () => {
    if (!isEventCreate(data)) return;
    log.info('handle submit');
    try {
      setProcessing(true);
      log.info('creating event');
      await manager.events.createItem({ ...data, themeId });
      log.info('creating event done');
      log.info('updating settings');
      await manager.user.modifySettings({ onboarding: 'done' });
      log.info('updating settings done');
      setProcessing(false);
      manager.forms.reset('onboarding');
      history.push(routes.dashboard.events.list);
      showSnackbar(`Event created successfully!`, 'success');
    } catch (err: unknown) {
      log.err(err);
      setProcessing(false);
      showSnackbar(`Creating event error: ${errToStr(err)}`, 'error');
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
      id: 'complete',
      type: 'contained',
      title: 'complete',
      disabled: !isEventCreate(data),
      processing,
      endIcon: 'check-circle',
    },
  ];

  const curStepIndex = 3;

  return (
    <>
      <ScreenTitle title={steps[curStepIndex].title.short} />
      <SetupContainer
        title="Setup your awesome event"
        steps={steps}
        curStepIndex={curStepIndex}
        footer={{ leftBtns, rightBtns }}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <EventBasicCreateFrom
          data={data}
          errors={errors}
          processing={formProcessing}
          onLogoFileSelect={handleLogoFileSelect}
          onChange={handleDataChange}
        />
      </SetupContainer>
    </>
  );
};

export default OnboardingEventScreen;
