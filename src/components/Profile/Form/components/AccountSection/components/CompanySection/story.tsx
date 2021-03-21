import React from 'react';
import { Story, StoryMeta } from 'utils';

import CompanySection, { ProfileFormAccountSectionCompanySectionProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/Form/components/AccountSection/components/CompanySection',
  component: CompanySection,
}))();

export const Basic: Story<Props> = args => <CompanySection {...args} />;
