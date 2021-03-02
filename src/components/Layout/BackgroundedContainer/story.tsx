import React from 'react';

import BackgroundedContainer from '.';

export default {
  title: 'Components/Layout/BackgroundedContainer',
  component: BackgroundedContainer,
};

export const Basic = () => <BackgroundedContainer>{'%children%'}</BackgroundedContainer>;
