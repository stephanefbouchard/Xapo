import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';

import config from '../../../config'

class Dashboard extends Component {
  static propTypes = {};

  render() {
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
              <Title>{'Welcome to my tech test'}</Title>
            </Box>
          </Button>
        </Header>
        <Box pad='medium'>
          <Heading tag='h3' strong={true}>
            The navigation on the left show all projects from {config.GITHUB_ORGANIZATION} sorted by watchers count
          </Heading>
          <Paragraph size='large'>
           Click on a project to see details
          </Paragraph>
        </Box>
      </Article>
    );
  }
}

export default Dashboard;
