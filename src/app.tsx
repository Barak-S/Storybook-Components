import React, { FC } from 'react';
import { ContainedButton } from 'components/Buttons';

export const App: FC = () => {
  return (
    <>
      {'Stroybook'}
      <ContainedButton>{'got to storybook app'}</ContainedButton>
    </>
  );
};

export default App;
