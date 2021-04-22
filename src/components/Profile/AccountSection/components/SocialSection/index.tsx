import Divider from '@material-ui/core/Divider';
import { FormSocialSelect, FormTextInput } from 'components/Form';
import React, { FC } from 'react';
import { Style, Styles } from 'styles';

import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfileAccountSocialSection: FC<Props> = ({ style }) => {
  const classes = useStyles();

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  return (
    <div style={style} className={classes.socSection}>
      <div className={classes.headerSection}>
        <span className={classes.title}>{'Social Media Accounts'}</span>
        <span className={classes.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
      </div>
      <div className={classes.socBlock}>
        <FormSocialSelect
          classes={socialSelectClasses}
          label="Social Media"
          className={classes.socSelect}
          value="twitter"
          iconStart
        />
        <FormTextInput className={classes.inputText} inputStyle={styles.input} />
      </div>
      <div className={classes.socBlock}>
        <FormSocialSelect
          classes={socialSelectClasses}
          label="Social Media"
          className={classes.socSelect}
          value="facebook"
          iconStart
        />
        <FormTextInput className={classes.inputText} inputStyle={styles.input} />
      </div>
      <div className={classes.socBlock}>
        <FormSocialSelect
          classes={socialSelectClasses}
          label="Social Media"
          className={classes.socSelect}
          value="youtube"
          iconStart
        />
        <FormTextInput className={classes.inputText} inputStyle={styles.input} />
      </div>
      <div className={classes.socBlock}>
        <FormSocialSelect
          classes={socialSelectClasses}
          label="Social Media"
          className={classes.socSelect}
          value="another"
          iconStart
        />
        <FormTextInput className={classes.inputText} inputStyle={styles.input} style={{ marginBottom: 34 }} />
      </div>
      <Divider />
    </div>
  );
};

const styles: Styles = {
  input: {
    fontSize: 16,
  },
};

export type ProfileAccountSocialSectionProps = Props;
export default ProfileAccountSocialSection;
