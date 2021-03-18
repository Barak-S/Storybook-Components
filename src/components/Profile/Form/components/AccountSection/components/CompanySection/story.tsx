import { View } from 'components/Common';
import CompanySection from '.';
import React from 'react';

export default {
  title: 'components/Profile/Form/components/AccountSection/components/CompanySection',
  component: CompanySection,
};

export const Basic = () => (
  <View column>
    <View row>
      <CompanySection />
    </View>
  </View>
);
