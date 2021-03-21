import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ScreenTitle } from 'components/Common';
import { SelectOption } from 'components/Form';
import { OnboardingContainer, OnboardingStep, TeamMemberForm, TeamMemberList } from 'components/Onboarding';
import React, { ChangeEvent, FC, useState } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: OnboardingStep[];
  onCloseClick?: () => void;
}

export interface TeamFormData {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  userGroup?: string;
  companyType?: string;
  message?: string;
}

export type HandleTextInputChange = (
  key: keyof TeamFormData,
) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

export type HandleSelectFieldChange = (event: ChangeEvent<SelectOption>) => void;

export const OnboardingTeamScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const [invitedMembers, setInvitedMembers] = useState<TeamFormData[]>([]);
  const [data, setData] = useState<TeamFormData>({});

  const handleTextFieldChanged: HandleTextInputChange = key => event => {
    setData({ ...data, [key]: event.currentTarget.value });
  };

  const handleSelectFieldChanged: HandleSelectFieldChange = ({ target: { name, value } }) => {
    setData({ ...data, [String(name)]: value });
  };

  const handleSubmitForm = () => {
    setInvitedMembers([...invitedMembers, data]);
    setData({});
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Onboarding Team" />
      <OnboardingContainer title="Create Your Event" steps={steps} curStepIndex={1} onCloseClick={onCloseClick}>
        <Grid className={classes.container}>
          <Grid className={classes.content}>
            <TeamMemberForm
              data={data}
              onTextFieldChange={handleTextFieldChanged}
              onSelectFieldChange={handleSelectFieldChanged}
              onSubmit={handleSubmitForm}
            />
            <TeamMemberList members={invitedMembers} />
          </Grid>
        </Grid>
      </OnboardingContainer>
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
  })();

export default OnboardingTeamScreen;
