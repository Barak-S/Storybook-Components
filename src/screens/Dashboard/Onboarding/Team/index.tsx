import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { useSnackbar } from 'components/Feedback';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupContainerFooterBtnItem, SetupStep } from 'components/Setup';
import { TeamMemberInvitesList } from 'components/Team';
import { Log } from 'core';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { stateToCurOrgInvites, useSelector, useStoreManager } from 'store';
import { StyleProps } from 'styles';
import { errToStr } from 'utils';

import OnboardingTeamScreenForm, { OnboardingTeamScreenFormData as FormData } from './components/Form';

const log = Log('screens.OnboardingTeam');

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingTeamScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const invites = useSelector(stateToCurOrgInvites) || [];
  const [data, setData] = useState<FormData | undefined>();
  const [processing, setProcessing] = useState<boolean>();
  const { showSnackbar } = useSnackbar();
  const history = useHistory();
  const manager = useStoreManager();

  useEffect(() => {
    manager.orgs.updateInvites();
  }, []);

  const handleFormChange = (newData: FormData) => {
    setData(newData);
  };

  const handleFormSubmit = async () => {
    if (!data) {
      return;
    }
    const { firstName, lastName, title, role, email, message } = data;
    if (!firstName || !lastName || !role || !email) {
      return;
    }
    try {
      setProcessing(true);
      log.info('create invite');
      await manager.orgs.createInvite({ firstName, lastName, title, role, email, message });
      log.info('create invite done');
      setProcessing(false);
      showSnackbar(`Invite has been sent`, 'success');
    } catch (err: unknown) {
      setProcessing(false);
      log.err('creating invite err=', err);
      showSnackbar(`Creating invite err: ${errToStr(err)}`, 'error');
    }
  };

  const handleFooterBtnClick = async (btn: SetupContainerFooterBtnItem) => {
    if (btn.id === 'back') {
      history.push(routes.dashboard.onboarding.profile);
    }
    if (btn.id === 'continue') {
      manager.user.modifySettings({ onboarding: 'theme' });
      history.push(routes.dashboard.onboarding.theme);
    }
    if (btn.id === 'save') {
      history.push(routes.dashboard.onboarding.event);
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

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
      processing: processing,
      endIcon: 'chevron-circle-right',
    },
  ];

  return (
    <>
      <ScreenTitle title="Onboarding Team" />
      <SetupContainer
        title="Create Your Event"
        steps={steps}
        curStepIndex={1}
        footer={{ leftBtns, rightBtns }}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <Grid className={classes.container}>
          <Grid className={classes.content}>
            <OnboardingTeamScreenForm data={data} onChange={handleFormChange} onSubmit={handleFormSubmit} />
            <TeamMemberInvitesList className={classes.list} items={invites} />
          </Grid>
        </Grid>
      </SetupContainer>
    </>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up(1366)]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 590,
      },
    },
    list: {
      [theme.breakpoints.up(1366)]: {
        maxWidth: 360,
      },
    },
  })();

export default OnboardingTeamScreen;
