import { View } from 'components/Common';
import React from 'react';

import BioSection from '.';

export default {
  title: 'components/Profile/Form/components/AccountSection/components/BioSection',
  component: BioSection,
};

export const Basic = () => (
  <View column>
    <View row>
      <BioSection />
    </View>
  </View>
);
