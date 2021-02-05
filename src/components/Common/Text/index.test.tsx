import { shallow } from 'enzyme';
import React from 'react';

import Text from '.';

describe('<Text />', () => {
  it('should render', () => {
    const component = shallow(<Text style={{ height: 10 }}>{'Hello'}</Text>);
    expect(component).toMatchSnapshot('hello');
  });
});
