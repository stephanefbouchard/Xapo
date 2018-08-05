import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Spinning from 'grommet/components/icons/Spinning';

import { fetchRepositories } from "../store/actions/repositories";

import config from '../config'

import Logo from '../images/logo.png';

export class Nav extends Component {
  static propTypes = {
    repositoriesStore: PropTypes.object.isRequired,
    fetchRepositories: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchRepositories(config.GITHUB_ORGANIZATION);
  }

  render() {
    const { repositoriesStore } = this.props;

    let content;
    if (!repositoriesStore.repositories) {
      content = <Box
        direction='row'
        responsive={false}
        pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
      >
        <Spinning /><span>Loading...</span>
      </Box>;
    }
    else {
      content = this.createListOfProjects(repositoriesStore.repositories);
    }

    return (
      <Sidebar colorIndex='neutral-4' fixed={true}>
        <Header size='large' justify='between' pad={{ horizontal: 'small' }}>
          <Title>
            <span><img src={Logo} className="App-logo" alt="logo" style={{height: 40, width: 40}} />
            Xapo Tech Test
            </span>
          </Title>
        </Header>
        {content}
      </Sidebar>
    );
  }

  createListOfProjects(repositories) {
    return <Menu fill={true} primary={true}>
      {
        Object.keys(repositories).map(key => {
          const repo = repositories[key];
          return <Anchor
            key={repo.id}
            path={`/repo/${config.GITHUB_ORGANIZATION}/${repo.name}`}
            label={`${repo.name} (${repo.watchers})`}
          />
        })
      }
    </Menu>;
  }
}

const mapDispatchToProps = {
  fetchRepositories
};

const mapStateToProps = (state) => ({
  repositoriesStore: state.repositoriesStore,
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
