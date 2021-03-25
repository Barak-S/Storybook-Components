import { Divider, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormDragnDropImage, FormSelect, FormTextInput } from 'components/Form';
import { AccountProfile, AccountProfilePatch } from 'core/api';
import React, { FC, ChangeEvent } from 'react';
import { StyleProps, Styles } from 'styles';

import { useStyles } from './styles';

interface Props extends StyleProps {
  profile: AccountProfile;
  data?: AccountProfilePatch;
  onChange?: (val: AccountProfilePatch) => void;
}

export const ProfileAccountCompanySection: FC<Props> = ({ style, profile, data, onChange }) => {
  const classes = useStyles();

  const handleTextFieldChanged = (key: keyof AccountProfile) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    if (onChange) {
      onChange({ [key]: value });
    }
  };

  return (
    <View style={style} className={classes.contact}>
      <Grid container>
        <Grid xs={12} sm={12} md={5} lg={5}>
          <View className={classes.inputInf}>
            <FormTextInput
              style={styles.rowIndent}
              label="First Name"
              value={data?.firstName || ''}
              onChange={handleTextFieldChanged('firstName')}
            />
            <FormTextInput
              style={styles.rowIndent}
              label="Last Name"
              value={data?.lastName || ''}
              onChange={handleTextFieldChanged('lastName')}
            />
            <FormTextInput style={styles.rowIndent} label="Company" value={data?.company?.name || ''} />
            <FormTextInput style={styles.rowIndent} label="Title" />
            <FormTextInput style={styles.rowIndent} label="Email" disabled value={profile.email || ''} />
          </View>
        </Grid>
        <Grid xs={12} sm={12} md={7} lg={7}>
          <View className={classes.selectorInf}>
            <FormSelect
              className={classes.companySelect}
              fullWidth
              label="Role"
              options={[
                { value: 0, name: 'item1' },
                { value: 1, name: 'item2' },
              ]}
            />
          </View>
          <View className={classes.selectorInf}>
            <FormSelect
              className={classes.companySelect}
              fullWidth
              options={[
                { value: 0, name: 'item1' },
                { value: 1, name: 'item2' },
              ]}
              label="Company Type"
            />
          </View>
          <View className={classes.selectorInf}>
            <span className={classes.title}>{'Company Logo'}</span>
            <span className={classes.subtitle}>{'Lorem ipsum dolor sit amet, 600 x 200px and 1MB or less'}</span>
            <FormDragnDropImage className={classes.uploadImg} />
          </View>
        </Grid>
      </Grid>
      <Divider />
    </View>
  );
};

const styles: Styles = {
  rowIndent: {
    marginBottom: 41,
  },
};

export type ProfileAccountCompanySectionProps = Props;
export default ProfileAccountCompanySection;
