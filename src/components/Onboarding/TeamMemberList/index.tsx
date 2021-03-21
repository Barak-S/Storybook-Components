import { List, ListItem, makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { TeamFormData } from 'screens/Dashboard/Onboarding/Team';
import { StyleProps } from 'styles';
import TeamMemberCard from '../TeamMemberCard';

interface Props extends StyleProps {
  members: TeamFormData[];
}

export const TeamMemberList: FC<Props> = ({ members }) => {
  const theme = useTheme();
  const classes = useStyle(theme);

  return (
    <List className={classes.container}>
      {members.map(memberData => (
        <ListItem key={memberData.email} className={classes.listItem}>
          <TeamMemberCard data={memberData} />
        </ListItem>
      ))}
    </List>
  );
};

const useStyle = (theme: Theme) =>
  makeStyles({
    container: {
      width: '100%',
      padding: '0 10px 10px',
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        width: 0,
      },
      [theme.breakpoints.up(1366)]: {
        maxWidth: 360,
      },
    },
    listItem: {
      padding: 0,
      marginBottom: 20,
      '&:last-child': {
        marginBottom: 0,
      },
    },
  })();

export default TeamMemberList;
