import React from 'react';
import Dashboard from '../dashboard';

it('Dashboard Dom structure has not change', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});