import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupContainerFooterBtnItem, SetupStep } from 'components/Setup';
import { TeamMemberInvitesList } from 'components/Team';
import { isOrganizationInvite, OrganizationInvite } from 'core/api';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { StyleProps } from 'styles';

import OnboardingTeamScreenForm, { OnboardingTeamScreenFormData as FormData } from './components/Form';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingTeamScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const [invites, setInvites] = useState<OrganizationInvite[]>([]);
  const [data, setData] = useState<FormData | undefined>();
  const history = useHistory();

  const handleFormChange = (newData: FormData) => {
    setData(newData);
  };

  const handleFormSubmit = () => {
    if (isOrganizationInvite(data)) {
      setInvites([...invites, data]);
    }
    setData(undefined);
  };

  const handleFooterBtnClick = async (btn: SetupContainerFooterBtnItem) => {
    if (btn.id === 'back') {
      history.push(routes.dashboard.onboarding.profile);
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Onboarding Team" />
      <SetupContainer
        title="Create Your Event"
        steps={steps}
        curStepIndex={1}
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
