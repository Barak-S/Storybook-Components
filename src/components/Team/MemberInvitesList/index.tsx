import { List, ListItem, makeStyles, Theme, useTheme } from '@material-ui/core';
import { TeamMemberInvite } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import TeamMemberCard from '../MemberInviteCard';

interface Props extends StyleProps {
  items: TeamMemberInvite[];
}

export const TeamMemberInvitesList: FC<Props> = ({ items }) => {
  const theme = useTheme();
  const classes = useStyle(theme);

  return (
    <List className={classes.container}>
      {items.map(item => (
        <ListItem key={item.email} className={classes.listItem}>
          <TeamMemberCard data={item} />
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

export default TeamMemberInvitesList;
