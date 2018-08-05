import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import createStore from '../store/createStore';

it('App is rendering without crashing', () => {
  const store = createStore();

  const div = document.createElement('div');
  ReactDOM.render(<AppContainer store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('AppContainer dom structure do not change', () => {
  const store = createStore();

  const wrapper = shallow(<AppContainer store={store} />);
  expect(wrapper).toMatchSnapshot();
});