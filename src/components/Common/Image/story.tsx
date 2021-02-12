import React from 'react';

import Image from '.';

export default {
  title: 'Components/Common/Image',
  component: Image,
};

export const Basic = () => (
  <Image style={{ width: 300, height: 200 }} source={'https://picsum.photos/id/237/300/200'} />
);
