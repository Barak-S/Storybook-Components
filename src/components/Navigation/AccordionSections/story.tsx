import React from 'react';
import { Story, StoryMeta } from 'utils';

import AccordionSections, { AccordionSectionsProps as Props } from './index';

export default ((): StoryMeta<Props> => ({
  title: 'components/Navigation/AccordionSections',
  component: AccordionSections,
  args: {
    sections: [
      { id: 0, title: 'Fist section', content: 'Fist section' },
      { id: 1, title: 'Second section', content: 'Second section' },
    ],
  },
}))();

export const Basic: Story<Props> = args => <AccordionSections {...args} />;
