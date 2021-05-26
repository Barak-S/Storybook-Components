import { IconButton } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  color?: EventBadgeColor;
  label: string;
  disabled?: boolean;
  iconStart?: LineAwesomeIconType;
}

type EventBadgeColor = 'green' | 'purple';

export const EventBadgeStatus: FC<Props> = ({ label, disabled, iconStart, color = 'purple', style }) => {
  const styles = getStyles(color, disabled);

  return (
    <IconButton style={ms(styles.eventBadge, style)} disabled={disabled}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {iconStart && <LineAwesomeIcon type={iconStart} size={15} color={colors.white} style={{ marginRight: 5 }} />}
        <span style={styles.label}>{label}</span>
      </div>
    </IconButton>
  );
};

const getStyles = (badgeColor: EventBadgeColor, disabled?: boolean): Styles => ({
  eventBadge: {
    backgroundColor: !disabled ? (badgeColor === 'green' ? colors.green : colors.warmPurple) : colors.silverTwo,
    height: 24,
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: '4px 17px',
    fontSize: 10,
    color: colors.white,
  },
  label: {
    letterSpacing: '0.8px',
  },
});

export type EventBadgeStatusProps = Props;
export default EventBadgeStatus;
