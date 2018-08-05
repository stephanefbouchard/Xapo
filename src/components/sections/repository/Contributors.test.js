import React from 'react';
import Contributors from './Contributors';
import createStore from '../../../store/createStore';

it('Contributors are Loading', () => {
  const store = createStore();

  const wrapper = render(<Contributors
    store={store}
    organizationName={'orgTest'}
    repositoryName={'repoTest'}
  />);
  expect(wrapper).toMatchSnapshot();
});

it('Contributors are displayed correctly', () => {
  let state = createStore({}).getState();
  state.repositoriesStore.repositoryContributors = [
    {
      id: 111,
      login: 'loginName1',
      html_url: 'http://anHttlAddress'
    },
    {
      id: 222,
      login: 'loginName2',
      html_url: 'http://anotherHttlAddress'
    },
  ];
  const store = createStore(state);

  const wrapper = render(<Contributors
    store={store}
    organizationName={'orgTest'}
    repositoryName={'repoTest'}
  />);
  expect(wrapper).toMatchSnapshot();
});

it('Contributors handle Api error properly', () => {
  let state = createStore({}).getState();
  state.repositoriesStore.api.REPOSITORY_CONTRIBUTORS_GET.error = {
    message: 'ERROR is displayed here'
  };
  const store = createStore(state);

  const wrapper = render(<Contributors
    store={store}
    organizationName={'orgTest'}
    repositoryName={'repoTest'}
  />);
  expect(wrapper).toMatchSnapshot();
});