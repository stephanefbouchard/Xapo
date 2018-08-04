import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';

import { fetchRepositoryContributors } from "../../../store/actions/repositories";

class Contributors extends Component {
  static propTypes = {
    organizationName: PropTypes.string.isRequired,
    repositoryName: PropTypes.string.isRequired,
    repositoriesStore: PropTypes.object.isRequired,
    fetchRepositoryContributors: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const {organizationName, repositoryName} = this.props;

    this.props.fetchRepositoryContributors(organizationName, repositoryName);
  }

  render() {
    const {repositoriesStore} = this.props;
    const { repositoryContributors } = repositoriesStore;

    let apiStatus = repositoriesStore.api.REPOSITORY_CONTRIBUTORS_GET;
    if (apiStatus.isFetching) {
      return <span>Loading Contributors...</span>;
    }
    if (apiStatus.error) {
      return <span>{apiStatus.error.message}</span>;
    }

    return (
      <Paragraph size='large'>
        {
          Object.keys(repositoryContributors).map(key => {
            const contributor = repositoryContributors[key];
            return <Heading tag='h6' key={contributor.id}>{contributor.login}</Heading>
          })
        }
      </Paragraph>
    );
  }
}

const mapDispatchToProps = {
  fetchRepositoryContributors,
};

const mapStateToProps = (state) => ({
  repositoriesStore: state.repositoriesStore,
});

export default connect(mapStateToProps, mapDispatchToProps)(Contributors)
