import React from 'react';

import AuthScreenBackground from '.';

export default {
  title: 'Components/Auth/ScreenBackground',
  component: AuthScreenBackground,
};

export const Basic = () => <AuthScreenBackground>{'%children%'}</AuthScreenBackground>;
