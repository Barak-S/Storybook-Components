import { List, ListItem, makeStyles, useTheme } from '@material-ui/core';
import { TeamMemberInvite } from 'core/api';
import React, { FC } from 'react';
import { mc, StyleProps } from 'styles';

import TeamMemberCard from '../MemberInviteCard';

interface Props extends StyleProps {
  className: string;
  items: TeamMemberInvite[];
}

export const TeamMemberInvitesList: FC<Props> = ({ style, className, items }) => {
  const theme = useTheme();
  const classes = useStyle(theme);

  return (
    <List className={mc(classes.container, className)} style={style}>
      {items.map(item => (
        <ListItem key={item.email} className={classes.listItem}>
          <TeamMemberCard data={item} />
        </ListItem>
      ))}
    </List>
  );
};

const useStyle = makeStyles({
  container: {
    width: '100%',
    padding: '0 10px 10px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
  listItem: {
    padding: 0,
    marginBottom: 20,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export default TeamMemberInvitesList;
