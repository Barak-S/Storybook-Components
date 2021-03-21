import Divider from '@material-ui/core/Divider';
import { FormSocialSelect, FormTextInput, FormToggle } from 'components/Form';
import React, { FC } from 'react';
import { Style } from 'styles';

import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfileAccountSocialSection: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <div style={style} className={classes.socSection}>
      <div className={classes.headerSection}>
        <span className={classes.title}>{'Social Media Accounts'}</span>
        <span className={classes.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
      </div>
      <div className={classes.blockInf}>
        <div className={classes.socBlock}>
          <FormSocialSelect />
          <FormTextInput className={classes.inputText} />
          <FormToggle title="Global Account" />
        </div>
        <div className={classes.socBlock}>
          <FormSocialSelect />
          <FormTextInput className={classes.inputText} />
          <FormToggle title="Global Account" />
        </div>
        <div className={classes.socBlock}>
          <FormSocialSelect />
          <FormTextInput className={classes.inputText} />
          <FormToggle title="Global Account" />
        </div>
        <div className={classes.socBlock}>
          <FormSocialSelect />
          <FormTextInput className={classes.inputText} />
          <FormToggle title="Global Account" />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export type ProfileAccountSocialSectionProps = Props;
export default ProfileAccountSocialSection;
