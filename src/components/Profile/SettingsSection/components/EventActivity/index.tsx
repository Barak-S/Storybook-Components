import Divider from '@material-ui/core/Divider';
import { FormToggle } from 'components/Form';
import { AccountProfilePatch, AccountProfileSettings, AccountProfileSubscrSettings, AccountProfileEventSettings } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import { useStyles } from './styles';

interface Props extends StyleProps {
  data?: AccountProfilePatch;
  onChange?: (val: AccountProfilePatch) => void;
}

export const ProfileSettingsSectionEventActivity: FC<Props> = ({ style, data, onChange }) => {
  const classes = useStyles();

  const handleEventSettingChange = (val: Partial<AccountProfileEventSettings>) => {
    const cur: AccountProfileEventSettings = data?.settings?.event || {};
    const event: AccountProfileEventSettings = { ...cur, ...val };
    const settings: AccountProfileSettings = data?.settings ? { ...data.settings, event } : { event };
    if (onChange) {
      onChange({ settings });
    }
  };

  const handleSubscrSettingChange = (val: Partial<AccountProfileSubscrSettings>) => {
    const cur: AccountProfileSubscrSettings = data?.settings?.subscriptions || {};
    const subscriptions: AccountProfileSubscrSettings = { ...cur, ...val };
    const settings: AccountProfileSettings = data?.settings ? { ...data.settings, subscriptions } : { subscriptions };
    if (onChange) {
      onChange({ settings });
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
            value={data?.settings?.event?.notifyAboutNewParticipants || false}
            onChange={val => handleEventSettingChange({ notifyAboutNewParticipants: val })}
          />
        </div>
        <div className={classes.switch}>
          <FormToggle
            title="Notify about sold out tickets"
            value={data?.settings?.event?.notifyAboutSoldOutTickets || false}
            onChange={val => handleEventSettingChange({ notifyAboutSoldOutTickets: val })}
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
            value={data?.settings?.subscriptions?.productUpdate || false}
            onChange={val => handleSubscrSettingChange({ productUpdate: val })}
          />
        </div>
        <div className={classes.switch}>
          <FormToggle
            title="Offers and deals"
            value={data?.settings?.subscriptions?.offersAndDeals || false}
            onChange={val => handleSubscrSettingChange({ offersAndDeals: val })}
          />
        </div>
        <div className={classes.switch}>
          <FormToggle
            title="Events near me"
            value={data?.settings?.subscriptions?.eventsNearMe || false}
            onChange={val => handleSubscrSettingChange({ eventsNearMe: val })}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export type ProfileSettingsSectionEventActivity = Props;
export default ProfileSettingsSectionEventActivity;
