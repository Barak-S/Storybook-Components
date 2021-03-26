import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import { TeamMemberInvitesList } from 'components/Team';
import { isTeamMemberInvite, TeamMemberInvite } from 'core/api';
import React, { FC, useState } from 'react';
import { StyleProps } from 'styles';

import OnboardingTeamScreenForm, { OnboardingTeamScreenFormData as FormData } from './components/Form';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingTeamScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const [invites, setInvites] = useState<TeamMemberInvite[]>([]);
  const [data, setData] = useState<FormData | undefined>();

  const handleFormChange = (newData: FormData) => {
    setData(newData);
  };

  const handleFormSubmit = () => {
    if (isTeamMemberInvite(data)) {
      setInvites([...invites, data]);
    }
    setData(undefined);
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Onboarding Team" />
      <SetupContainer title="Create Your Event" steps={steps} curStepIndex={1} onCloseClick={onCloseClick}>
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
