import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';

class Contributors extends Component {
  static propTypes = {
    organizationName: PropTypes.string.isRequired,
    repositoryName: PropTypes.string.isRequired,
    repositoriesStore: PropTypes.object.isRequired,
  };

  render() {
    const {repositoriesStore} = this.props;
    const { repositoryContributors } = repositoriesStore;

    let apiStatus = repositoriesStore.api.REPOSITORY_CONTRIBUTORS_GET;
    if (apiStatus.isFetching) {
      return <Box
        direction='row'
        responsive={false}
        pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
      >
        <Spinning /><span>Loading Contributors...</span>
      </Box>;
    }
    if (apiStatus.error) {
      return <span>{apiStatus.error.message}</span>;
    }

    return (
      <Box size='large'>
        {
          Object.keys(repositoryContributors).map(key => {
            const contributor = repositoryContributors[key];
            return <span><a href={contributor.html_url} target='_blank' key={contributor.id}>{contributor.login}</a></span>
          })
        }
      </Box>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  repositoriesStore: state.repositoriesStore,
});

export default connect(mapStateToProps, mapDispatchToProps)(Contributors)
