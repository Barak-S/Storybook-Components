import { useSnackbar } from 'components/Feedback';
import { Log, useAuth } from 'core';
import React, { FC, useState } from 'react';
import { StyleProps } from 'styles';

import DashboardEmailConfirmView from './view';

const log = Log('screens.DashboardEvents.scenes.EmailConfirm');

type Props = StyleProps;

export const DashboardEmailConfirmScene: FC<Props> = ({ style }) => {
  const [processing, setProcessing] = useState<boolean>(false);
  const { resendEmailConfirmation } = useAuth();
  const { showSnackbar } = useSnackbar();

  const handleResendEmailPress = async () => {
    log.debug('hanlde resend email press');
    try {
      setProcessing(true);
      log.info('resending email confirmation');
      await resendEmailConfirmation();
      log.info('resending email confirmation done');
      setProcessing(false);
      showSnackbar('Confirmation is sent. Please check your email.', 'success');
    } catch (err: unknown) {
      log.err(err);
      setProcessing(false);
      showSnackbar(`Sending confirmation error`, 'error');
    }
  };

  return <DashboardEmailConfirmView style={style} processing={processing} onSubmit={handleResendEmailPress} />;
};

export type DashboardEmailConfirmSceneProps = Props;
export default DashboardEmailConfirmScene;
