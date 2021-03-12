import { View } from 'components/Common';
import AccordionSections from './index';
import React from 'react';

export default {
  title: 'components/Navigation/AccordionSections',
  component: AccordionSections,
};

export const Basic = () => (
  <View>
    <View row>
      <AccordionSections
        sections={[
          { id: 0, title: 'Fist section', content: 'Fist section' },
          { id: 1, title: 'Second section', content: 'Second section' },
        ]}
      />
    </View>
  </View>
);
