import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { Title, View } from 'components/Common';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { colors, mc, ms, StyleProps } from 'styles';

import EventBadgeStatus from '../BadgeStatus';

interface Props extends StyleProps {
  title?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
  linkTo?: string;
  icon: LineAwesomeIconType;
}

export const EditEventTile: FC<Props> = ({ title, description, disabled, icon, linkTo, children, style, className }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Paper
      className={mc(classes.container, className)}
      style={ms({ background: hover ? 'rgba(255,255,255,0.6)' : colors.white }, style)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => (linkTo ? history.push(linkTo) : undefined)}
    >
      <View row style={{ justifyContent: 'space-between' }}>
        <LineAwesomeIcon
          type={icon}
          size={22}
          color={hover ? colors.white : colors.warmPurple}
          style={{
            border: `2px solid ${hover ? colors.white : colors.warmPurple}`,
            borderRadius: 100,
            padding: 17,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: hover ? colors.warmPurple : colors.white,
          }}
        />
        <EventBadgeStatus
          color="green"
          label="READY"
          disabled={disabled}
          iconStart="check-circle"
          style={{ padding: '4px 13px' }}
        />
      </View>
      <Title type="h3" className={classes.eventTitle}>
        {title}
      </Title>
      <span className={classes.description}>{description}</span>
      {children}
      {title && (
        <div className={classes.linkTo}>
          <span className={classes.linktoText} style={{ color: hover ? colors.link : '#afafaf' }}>
            {title}
          </span>
          <LineAwesomeIcon type="arrow-right" size={13} color={hover ? colors.link : '#afafaf'} />
        </div>
      )}
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      maxWidth: 311,
      width: '100%',
      height: '100%',
      padding: 23,
      borderRadius: 12,
      marginBottom: 21,
      cursor: 'pointer',
      position: 'relative',
      boxShadow: '0px 0px 20px #AAAAAA40',
    },
    eventTitle: {
      color: colors.warmPurple,
      fontSize: 15,
      fontWeight: 500,
      paddingTop: 10.5,
      paddingBottom: 6.5,
    },
    description: {
      display: 'block',
      fontSize: 12,
      color: colors.greyishBrown,
      fontWeight: 400,
      paddingBottom: 14.5,
      textTransform: 'none',
    },
    linkTo: {
      display: 'flex',
      position: 'absolute',
      bottom: 23,
      right: 23,
      alignItems: 'center',
    },
    linktoText: {
      display: 'block',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 0.6,
    },
  })();

export type EditEventTileProps = Props;
export default EditEventTile;
