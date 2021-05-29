import { List, ListItem, makeStyles, useTheme } from '@material-ui/core';
import { Text, View } from 'components/Common';
import { OrganizationInvite } from 'core/api';
import React, { FC } from 'react';
import { ClassNameProps, mc, StyleProps } from 'styles';

import TeamMemberCard from '../MemberInviteCard';

interface Props extends StyleProps, ClassNameProps {
  items: OrganizationInvite[];
  placeholder?: string;
}

export const TeamMemberInvitesList: FC<Props> = ({ style, className, items, placeholder = `List is empty` }) => {
  const theme = useTheme();
  const classes = useStyle(theme);

  return (
    <List className={mc(classes.container, className)} style={style}>
      {items.length ? (
        items.map(item => (
          <ListItem key={item.id} className={classes.listItem}>
            <TeamMemberCard data={item} />
          </ListItem>
        ))
      ) : (
        <View alignItems="center">
          <Text block>{placeholder}</Text>
        </View>
      )}
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
