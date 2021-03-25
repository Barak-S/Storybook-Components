import { AccountProfilePatch } from 'core/api';
import { mockAccountProfile } from 'mock';
import React, { FC, useState } from 'react';
import { Story, StoryMeta } from 'utils';

import AccountSection, { ProfileAccountSectionProps as Props } from '.';

const profile = mockAccountProfile({ seed: 1 });

export default ((): StoryMeta<Props> => ({
  title: 'components/Profile/AccountSection',
  component: AccountSection,
  args: {
    profile,
  },
}))();

const AccountSectionTemplate: FC<Omit<Props, 'onChange'>> = ({ data: incomingData, ...props }) => {
  const [data, setData] = useState<AccountProfilePatch>(incomingData ? incomingData : {});
  return <AccountSection data={data} onChange={v => setData(v)} {...props} />;
};

export const Basic: Story<Props> = args => <AccountSectionTemplate {...args} />;
