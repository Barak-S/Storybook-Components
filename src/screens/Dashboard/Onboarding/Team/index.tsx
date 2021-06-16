import { Grid } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
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
import { StyleProps, Styles, useScreenSizes } from 'styles';
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
  const [processing, setProcessing] = useState<boolean>(false);
  const { whenNotMobile } = useScreenSizes();

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

  const submitDisabled = !isOrganizationInviteCreate(data);

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
        <Grid style={styles.container} container direction="row" spacing={3}>
          <Grid item sm={7} xs={12} container direction="column">
            <Grid style={styles.formColumn} item>
              <TeamMemberCreateInviteForm style={styles.form} data={data} onChange={handleFormChange} />
            </Grid>
            <Grid item container direction="row-reverse">
              <Grid item sm={8} xs={12}>
                <ContainedButton
                  style={styles.submitBtn}
                  size="medium"
                  color="primary"
                  processing={processing}
                  endIcon="envelope-open"
                  disabled={submitDisabled}
                  onClick={handleFormSubmit}
                >
                  {'Invite and add another'}
                </ContainedButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className={whenNotMobile('container-bottom-scroll-gradient')}
            style={whenNotMobile(styles.listColumn)}
            sm={5}
            xs={12}
            item
          >
            <TeamMemberInvitesList style={styles.list} items={invites} placeholder="Send first invite to see the list" />
          </Grid>
        </Grid>
      </SetupContainer>
    </>
  );
};

const styles: Styles = {
  container: {
    marginBottom: 30,
  },
  form: {
    marginBottom: 30,
  },
  submitBtn: {
    minWidth: 210,
    paddingLeft: 10,
    paddingRight: 10,
  },
  formColumn: {},
  listColumn: {
    maxHeight: 500,
    overflowY: 'scroll',
  },
  list: {},
};

export default OnboardingTeamScreen;
