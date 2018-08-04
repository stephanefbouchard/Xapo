import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from 'grommet/components/Article';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { organization, repository } = this.props.match.params;

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
            {organization} / {repository}
          </Heading>
          <Paragraph size='large'>

          </Paragraph>
        </Box>
      </Article>
    );
  }
}

export default Repository;
