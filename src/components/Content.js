import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';

class Content extends Component {
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
              <Title>{'Wazzzupp this repo'}</Title>
            </Box>
          </Button>
        </Header>
        <Box pad='medium'>
          <Heading tag='h3' strong={true}>
            Here we go
          </Heading>
          <Paragraph size='large'>
           What are we gonna show here
          </Paragraph>
        </Box>
      </Article>
    );
  }
}

export default Content;
