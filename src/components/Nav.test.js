import React from 'react';
import Nav from './Nav';
import createStore from '../store/createStore';

it('Navigation is Loading list of project', () => {
  const store = createStore();

  const wrapper = render(<Nav
    store={store}
  />);
  expect(wrapper).toMatchSnapshot();
});

it('Navigation is displaying repositories', () => {
  let state = createStore({}).getState();
  state.repositoriesStore.repositories = [
    {
      id: 111,
      name: 'Repository1',
    },
    {
      id: 222,
      name: 'Repository2',
    },
  ];
  const store = createStore(state);

  const wrapper = render(<Nav
    store={store}
    organizationName={'orgTest'}
    repositoryName={'repoTest'}
  />);
  expect(wrapper).toMatchSnapshot();
});