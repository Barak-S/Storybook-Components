import Divider from '@material-ui/core/Divider';
import { FormToggle } from 'components/Form';
import { UserSettings } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import { useStyles } from './styles';

interface Props extends StyleProps {
  data?: UserSettings;
  onChange?: (val: UserSettings) => void;
}

export const ProfileSettingsSectionEventActivity: FC<Props> = ({ style, data, onChange }) => {
  const classes = useStyles();

  const handleChange = (val: Partial<UserSettings>) => {
    if (onChange) {
      onChange({ ...(data ? data : {}), ...val });
    }
  };

  return (
    <div className={classes.container} style={style}>
      <div className={classes.headerSection}>
        <span className={classes.title}>{'Event Activity'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </div>
      <div className={classes.blockInf}>
        <div className={classes.switch}>
          <FormToggle
            title="Notify about new participants"
            value={data?.notifyAboutNewParticipants || false}
            onChange={val => handleChange({ notifyAboutNewParticipants: val })}
          />
        </div>
        <div className={classes.switch}>
          <FormToggle
            title="Notify about sold out tickets"
            value={data?.notifyAboutSoldOutTickets || false}
            onChange={val => handleChange({ notifyAboutSoldOutTickets: val })}
          />
        </div>
      </div>
      <div className={classes.headerSection}>
        <span className={classes.title}>{'Subscriptions'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </div>
      <div className={classes.blockInf2}>
        <div className={classes.switch}>
          <FormToggle
            title="Product update"
            value={data?.subscrProductUpdate || false}
            onChange={val => handleChange({ subscrProductUpdate: val })}
            style={{ minWidth: 296 }}
          />
        </div>
        <div className={classes.switch}>
          <FormToggle
            title="Offers and deals"
            value={data?.subscrOffersAndDeals || false}
            onChange={val => handleChange({ subscrOffersAndDeals: val })}
          />
        </div>
        <div className={classes.switch}>
          <FormToggle
            title="Events near me"
            value={data?.subscrEventsNearMe || false}
            onChange={val => handleChange({ subscrEventsNearMe: val })}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export type ProfileSettingsSectionEventActivity = Props;
export default ProfileSettingsSectionEventActivity;
