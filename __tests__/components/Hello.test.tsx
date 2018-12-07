import { shallow } from 'enzyme';
import React from 'react';

import Hello from '../../src/components/Hello';

describe('Hello', () => {
  it('renders without exploding', () => {
    const shallowHello = shallow(<Hello text="name" />);
    expect(shallowHello).toBeDefined();
  });
});
