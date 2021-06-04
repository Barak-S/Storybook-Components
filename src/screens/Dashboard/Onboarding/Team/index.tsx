import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import { useSnackbar } from 'components/Feedback';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupContainerFooterBtnItem, SetupStep } from 'components/Setup';
import { TeamMemberCreateInviteForm, TeamMemberCreateInviteFormData as FormData, TeamMemberInvitesList } from 'components/Team';
import { Log } from 'core';
import { isOrganizationInviteCreate } from 'core/api';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { stateToCurOrgInvites, useSelector, useStoreManager } from 'store';
import { StyleProps, Styles } from 'styles';
import { errToStr } from 'utils';

const log = Log('screens.Dashboard.Onboarding.Team');

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingTeamScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const manager = useStoreManager();
  const invites = useSelector(stateToCurOrgInvites) || [];
  const storedData = useSelector(s => s.forms.onboarding.invite);

  const [data, setData] = useState<FormData | undefined>(storedData);
  const [processing, setProcessing] = useState<boolean>();

  const { showSnackbar } = useSnackbar();
  const history = useHistory();

  useEffect(() => {
    manager.orgs.updateInvites();
  }, []);

  const handleFormChange = (newData: FormData) => {
    setData(newData);
  };

  const handleFormSubmit = async () => {
    if (!isOrganizationInviteCreate(data)) return;
    try {
      setProcessing(true);
      log.info('create invite');
      await manager.orgs.createInvite(data);
      log.info('create invite done');
      setData(undefined);
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
    if (btn.id === 'save') {
      manager.forms.modify('onboarding', { invite: data });
      history.push(routes.dashboard.events.list);
    }
    if (btn.id === 'continue') {
      manager.user.modifySettings({ onboarding: 'theme' });
      history.push(routes.dashboard.onboarding.theme);
    }
  };

  const handleSkipClick = () => {
    log.info('handle skip click');
    manager.user.modifySettings({ onboarding: 'theme' });
    history.push(routes.dashboard.onboarding.theme);
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
      endIcon: 'chevron-circle-right',
    },
  ];

  const submitDisabled = !data || !isOrganizationInviteCreate(data);

  const curStepIndex = 1;

  return (
    <>
      <ScreenTitle title={steps[curStepIndex].title.short} />
      <SetupContainer
        title="Create Your Event"
        steps={steps}
        curStepIndex={curStepIndex}
        footer={{ leftBtns, rightBtns }}
        onCloseClick={onCloseClick}
        onSkipClick={handleSkipClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <Grid style={styles.container}>
          <Grid className={classes.content}>
            <View alignItems="flex-end">
              <TeamMemberCreateInviteForm style={styles.form} data={data} onChange={handleFormChange} />
              <ContainedButton
                style={styles.submitBtn}
                size="medium"
                processing={processing}
                endIcon="envelope-open"
                disabled={submitDisabled}
                onClick={handleFormSubmit}
              >
                {'Invite and add another'}
              </ContainedButton>
            </View>
            <TeamMemberInvitesList className={classes.list} items={invites} placeholder="Send first invite to see the list" />
          </Grid>
        </Grid>
      </SetupContainer>
    </>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    marginBottom: 30,
  },
  submitBtn: {
    width: 'auto',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 30,
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
