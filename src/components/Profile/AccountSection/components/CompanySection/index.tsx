import React, { FC } from 'react';

import { FormTextInput, FormDragnDropImage, FormSelect } from 'components/Form';

import Divider from '@material-ui/core/Divider';

import { useStyles } from './styles';
import { Style } from 'styles';
import { View } from 'components/Common';

interface Props {
  style?: Style;
}

export const ProfileAccountCompanySection: FC<Props> = ({ style }) => {
  const classes = useStyles();

  return (
    <View style={style} className={classes.contact}>
      <View>
        <View className={classes.headerSection}>
          <span className={classes.title}>{'Contact & Company Information'}</span>
          <span className={classes.subtitle}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
          </span>
        </View>
        <View row className={classes.blockInf}>
          <View className={classes.inputInf}>
            <FormTextInput style={{ marginBottom: 41 }} label="First Name" />
            <FormTextInput style={{ marginBottom: 41 }} label="First Name" />
            <FormTextInput style={{ marginBottom: 41 }} label="Company" />
            <FormTextInput style={{ marginBottom: 41 }} label="Title" />
            <FormTextInput style={{ marginBottom: 41 }} label="Email" />
          </View>
          <View>
            <View className={classes.selectorInf}>
              <FormSelect
                options={[
                  { value: 0, label: 'item1' },
                  { value: 1, label: 'item2' },
                ]}
                placeholder="Role"
              />
            </View>
            <View className={classes.selectorInf}>
              <FormSelect
                options={[
                  { value: 0, label: 'item1' },
                  { value: 1, label: 'item2' },
                ]}
                placeholder="Company Type"
              />
            </View>
            <View className={classes.selectorInf}>
              <span className={classes.title}>{'Company Logo'}</span>
              <span className={classes.subtitle}>{'Lorem ipsum dolor sit amet, 600 x 200px and 1MB or less'}</span>
              <FormDragnDropImage />
            </View>
          </View>
        </View>
        <Divider />
      </View>
    </View>
  );
};

export type ProfileAccountCompanySectionProps = Props;
export default ProfileAccountCompanySection;
