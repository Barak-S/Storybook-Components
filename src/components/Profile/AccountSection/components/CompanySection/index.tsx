import { Divider, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormTextInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import { User, UserUpdate } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import { useStyles } from './styles';
import { UserUpdateFormErrs as FormErrs } from 'screens/Dashboard/Profile';

interface Props extends StyleProps {
  profile: User;
  data?: UserUpdate;
  errors?: FormErrs;
  onChange?: (val: UserUpdate) => void;
}

export const ProfileAccountCompanySection: FC<Props> = ({ style, profile, data, errors, onChange }) => {
  const classes = useStyles();

  const handleTextFieldChanged = (key: keyof UserUpdate) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    if (onChange) {
      onChange({ [key]: value });
    }
  };

  return (
    <View style={style} className={classes.contact}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contactSection}>
          <View className={classes.inputInf}>
            <FormTextInput
              className={classes.inputFull}
              label="First Name"
              error={!!errors?.firstName}
              helperText={errors?.firstName}
              inputStyle={styles.input}
              value={data?.firstName || ''}
              onChange={handleTextFieldChanged('firstName')}
            />
            <FormTextInput
              className={classes.inputFull}
              label="Last Name"
              error={!!errors?.lastName}
              helperText={errors?.lastName}
              inputStyle={styles.input}
              value={data?.lastName || ''}
              onChange={handleTextFieldChanged('lastName')}
            />
            <FormTextInput
              label="Email"
              disabled
              inputStyle={styles.input}
              className={classes.inputFull}
              adornmentType="transparent"
              value={profile.email || ''}
              iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
            />
          </View>
        </Grid>
      </Grid>
      <Divider />
    </View>
  );
};

const styles: Styles = {
  input: {
    fontSize: 16,
  },
};

export type ProfileAccountCompanySectionProps = Props;
export default ProfileAccountCompanySection;
