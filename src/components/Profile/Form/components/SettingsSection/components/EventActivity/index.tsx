import Divider from '@material-ui/core/Divider';
import { FormToggle } from 'components/Form';
import React, { FC } from 'react';
import { Style } from 'styles';

import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfileFormSettingsSectionEventActivity: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <div className={classes.ReaderSection} style={style}>
      <div className={classes.headerSection}>
        <span className={classes.title}>{'EventActivity'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </div>
      <div className={classes.blockInf}>
        <div className={classes.switch}>
          <FormToggle title="Notify about new participants" />
        </div>
        <div className={classes.switch}>
          <FormToggle title="Notify about sold out tickets" />
        </div>
      </div>
      <div className={classes.headerSection}>
        <span className={classes.title}>{'Subscriptions'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </div>
      <div className={classes.blockInf}>
        <div className={classes.switch}>
          <FormToggle title="Product update" />
        </div>
        <div className={classes.switch}>
          <FormToggle title="Offers and deals" />
        </div>
        <div className={classes.switch}>
          <FormToggle title="Events near me" />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ProfileFormSettingsSectionEventActivity;
