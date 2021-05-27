import {
  EventBasicCreateFrom,
  EventBasicCreateFromData as FormData,
  EventBasicCreateFromErrors as FormErrors,
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
import { errToStr } from 'utils';

const log = Log('screens.Dashboard.Onboarding.Event');

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingEventScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const history = useHistory();

  const [data, setData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormErrors | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);
  const { showSnackbar } = useSnackbar();

  const manager = useStoreManager();
  const themeId = useSelector(s => s.forms.onboarding.theme?.id);

  const handleDataChane = (newData: Partial<FormData>) => {
    setErrors(undefined);
    setData(v => ({ ...v, ...newData }));
  };

  const handleFooterBtnClick = async (btn: SetupContainerFooterBtnItem) => {
    if (btn.id === 'back') {
      history.push(routes.dashboard.onboarding.theme);
    }
    if (btn.id === 'complete') {
      handleSubmit();
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
    // {
    //   id: 'save',
    //   type: 'text',
    //   title: 'Save & Continue Later',
    // },
    {
      id: 'complete',
      type: 'contained',
      title: 'complete',
      disabled: !isEventCreate(data),
      processing,
      endIcon: 'check-circle',
    },
  ];

  return (
    <>
      <ScreenTitle title="Setup Event" />
      <SetupContainer
        title="Setup your awesome event"
        steps={steps}
        curStepIndex={3}
        footer={{ leftBtns, rightBtns }}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <EventBasicCreateFrom data={data} errors={errors} onChange={handleDataChane} />
      </SetupContainer>
    </>
  );
};

export default OnboardingEventScreen;
