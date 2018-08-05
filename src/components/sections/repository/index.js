import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Title from 'grommet/components/Title';
import Spinning from 'grommet/components/icons/Spinning';

import Contributors from './Contributors'

import {
  fetchRepositories,
  fetchRepositoryContributors
} from "../../../store/actions/repositories";

class Repository extends Component {
  static propTypes = {
    repositoriesStore: PropTypes.object.isRequired,
    fetchRepositories: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  getOrganizationFromParams() {
    return  this.props.match.params.organization;
  }

  getRepositoryFromParams() {
    return  this.props.match.params.repository;
  }

  componentWillMount() {
    this.fetchRepositoryData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.fetchRepositoryData();
    }
  }

  fetchRepositoryData() {
    this.props.fetchRepositories(this.getOrganizationFromParams());
    this.props.fetchRepositoryContributors(this.getOrganizationFromParams(), this.getRepositoryFromParams());
  }

  render() {
    const { repositoriesStore } = this.props;
    const organizationName = this.getOrganizationFromParams();
    const repositoryName = this.getRepositoryFromParams();

    let apiStatus = repositoriesStore.api.REPOSITORIES_GET;
    if (apiStatus.error) {
      return <Article primary={true}>
        <Header colorIndex='critical' size='large' pad={{ horizontal: 'medium', between: 'small' }}>
          {apiStatus.error.message}
        </Header>
      </Article>;
    }
    if (!repositoriesStore.repositories) {
      return <Box
        direction='row'
        responsive={false}
        pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
      >
        <Spinning /><span>Loading...</span>
      </Box>;
    }

    const repository = repositoriesStore.repositories.find((item) => (item.name === repositoryName));
    if (!repository) {
      return <Article primary={true}>
        <Header colorIndex='critical' size='large' pad={{ horizontal: 'medium', between: 'small' }}>
          Error Repository not found
        </Header>
      </Article>;
    }

    return (
      <Article primary={true}>
        <Box pad='medium' colorIndex='neutral-3'>
          <Heading tag='h3' strong>
            {repository.full_name}
          </Heading>
          <Heading tag='h4'>
            Watchers: {repository.watchers_count} Stars: {repository.stargazers_count} Forks: {repository.forks}
          </Heading>
          <Heading tag='h4'>
            Github Url : <a href={repository.html_url} target={'_blank'}>{ repository.html_url }</a>
          </Heading>
          <Heading tag='h4'>
            Homepage : <a href={repository.homepage} target={'_blank'}>{ repository.homepage }</a>
          </Heading>
        </Box>
        <Box pad='medium' colorIndex='neutral-6'>
          <Title>Contributors</Title>
          <Contributors
            organizationName={organizationName}
            repositoryName={repositoryName}
          />
        </Box>
      </Article>
    );
  }
}

const mapDispatchToProps = {
  fetchRepositories,
  fetchRepositoryContributors,
};

const mapStateToProps = (state) => ({
  repositoriesStore: state.repositoriesStore,
});

export default connect(mapStateToProps, mapDispatchToProps)(Repository)
