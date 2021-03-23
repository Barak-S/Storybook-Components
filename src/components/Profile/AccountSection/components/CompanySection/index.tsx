import { Divider, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormDragnDropImage, FormSelect, FormTextInput } from 'components/Form';
import React, { FC } from 'react';
import { Style } from 'styles';

import { useStyles } from './styles';

interface Props {
  style?: Style;
}

export const ProfileAccountCompanySection: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <View style={style} className={classes.contact}>
      <Grid container>
        <Grid xs={12} sm={12} md={5} lg={5}>
          <View className={classes.inputInf}>
            <FormTextInput style={{ marginBottom: 41 }} label="First Name" />
            <FormTextInput style={{ marginBottom: 41 }} label="First Name" />
            <FormTextInput style={{ marginBottom: 41 }} label="Company" />
            <FormTextInput style={{ marginBottom: 41 }} label="Title" />
            <FormTextInput style={{ marginBottom: 41 }} label="Email" />
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

export type ProfileAccountCompanySectionProps = Props;
export default ProfileAccountCompanySection;
