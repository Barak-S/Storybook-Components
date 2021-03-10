import React from 'react';
import { Story, StoryMeta } from 'styles';

import AuthCopyrights, { AuthCopyrightsProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Auth/Copyrights',
  component: AuthCopyrights,
}))();

export const Basic: Story<Props> = props => <AuthCopyrights {...props} />;
