import { List, ListItem, makeStyles, useTheme } from '@material-ui/core';
import { Text, View } from 'components/Common';
import { OrganizationInvite } from 'core/api';
import React, { FC } from 'react';
import { ClassNameProps, colors, mc, ms, StyleProps, Styles } from 'styles';
import { lastIndex } from 'utils';

import TeamMemberCard from '../MemberInviteCard';

interface Props extends StyleProps, ClassNameProps {
  items: OrganizationInvite[];
  placeholder?: string;
}

export const TeamMemberInvitesList: FC<Props> = ({ style, className, items, placeholder = `List is empty` }) => {
  const theme = useTheme();
  const classes = useStyle(theme);

  return (
    <List className={mc(classes.container, className)} style={ms(styles.container, style)}>
      {items.length ? (
        items.map((item, index) => (
          <ListItem key={item.id} style={ms(styles.item, index !== lastIndex(items) && styles.itemIndent)}>
            <TeamMemberCard data={item} />
          </ListItem>
        ))
      ) : (
        <View alignItems="center">
          <Text style={styles.placeholderText} block>
            {placeholder}
          </Text>
        </View>
      )}
    </List>
  );
};

const styles: Styles = {
  container: {
    paddingTop: 0,
  },
  item: {
    padding: 0,
  },
  itemIndent: {
    marginBottom: 20,
  },
  placeholderText: {
    color: colors.coolGrey,
    textAlign: 'center',
  },
};

const useStyle = makeStyles({
  container: {
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
});

export default TeamMemberInvitesList;
