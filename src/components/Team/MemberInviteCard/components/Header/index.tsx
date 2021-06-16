import { Text, View } from 'components/Common';
import { OrganizationInvite } from 'core/api';
import React, { FC } from 'react';
import { colors, ms, mx, StyleProps, Styles, useScreenSizes } from 'styles';

interface Props extends StyleProps {
  data: OrganizationInvite;
}

export const TeamMemberInviteCardHeader: FC<Props> = ({ style, data }) => {
  const { firstName, lastName, email } = data;
  const { isMobile } = useScreenSizes();
  return (
    <View style={ms(styles.container, style)} direction={!isMobile ? 'row' : 'column'} justifyContent="space-between">
      <View style={styles.labelWrap}>
        <Text style={styles.label} block>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.label} block>
          {email}
        </Text>
      </View>
      <View style={ms(styles.valueWrap, !isMobile && styles.leftIndent)}>
        <Text style={styles.value}>{'Invite Sent'}</Text>
      </View>
    </View>
  );
};

const styles: Styles = {
  container: {},
  labelWrap: {
    flexGrow: 1,
    minWidth: 0,
  },
  label: {
    fontSize: '14px',
    color: colors.marine,
    fontWeight: 500,
    ...mx.threeDots,
  },
  valueWrap: {},
  value: {
    whiteSpace: 'nowrap',
    fontSize: '14px',
    color: colors.green,
    fontWeight: 500,
  },
  leftIndent: {
    marginLeft: 5,
  },
};

export type TeamMemberInviteCardHeaderProps = Props;
export default TeamMemberInviteCardHeader;
