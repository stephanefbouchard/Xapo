import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Article from 'grommet/components/Article';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';

import Contributors from './Contributors'

import { fetchRepositories,} from "../../../store/actions/repositories";

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
    this.props.fetchRepositories(this.getOrganizationFromParams());
  }

  render() {
    const { repositoriesStore } = this.props;

    let apiStatus = repositoriesStore.api.REPOSITORIES_GET;
    if (apiStatus.error) {
      return <Article primary={true}>
        <Header size='large' pad={{ horizontal: 'medium', between: 'small' }}>
          {apiStatus.error.message}
        </Header>
      </Article>;
    }

    return (
      <Article primary={true}>
        <Header
          direction='row'
          justify='between'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <Button>
            <Box
              direction='row'
              responsive={false}
              pad={{ between: 'small' }}
            >
              <Title>{'Here is the repo details'}</Title>
            </Box>
          </Button>
        </Header>
        <Box pad='medium'>
          <Heading tag='h3' strong={true}>
            {this.getOrganizationFromParams()} / {this.getRepositoryFromParams()}
          </Heading>
          <Paragraph size='large'>
            <Title>Contributors</Title>
            <Contributors
              organizationName={this.getOrganizationFromParams()}
              repositoryName={this.getRepositoryFromParams()}
            />
          </Paragraph>
        </Box>
      </Article>
    );
  }
}

const mapDispatchToProps = {
  fetchRepositories
};

const mapStateToProps = (state) => ({
  repositoriesStore: state.repositoriesStore,
});

export default connect(mapStateToProps, mapDispatchToProps)(Repository)
