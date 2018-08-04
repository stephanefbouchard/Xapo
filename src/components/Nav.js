import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Anchor from 'grommet/components/Anchor';

import { fetchRepositories } from "../store/actions/repositories";

import Logo from '../images/logo.png';

export class Nav extends Component {
  static propTypes = {
    repositoriesStore: PropTypes.object.isRequired,
    fetchRepositories: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchRepositories('facebook');
  }

  render() {
    return (
      <Sidebar colorIndex='neutral-3' fixed={true}>
        <Header size='large' justify='between' pad={{ horizontal: 'medium' }}>
          <Title onClick={this._onClose} a11yTitle='Close Menu'>
            <img src={Logo} className="App-logo" alt="logo" style={{height: 40, width: 40}} />
            <span>XAPO Test</span>
          </Title>
          <Button
            icon={<CloseIcon />}
            onClick={this._onClose}
            plain={true}
            a11yTitle='Close Menu'
          />
        </Header>
        <Menu fill={true} primary={true}>
          <Anchor key={'wazzzup'} path={'/wazzzup'} label={'wazzzup'} />
        </Menu>
        <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
        </Footer>
      </Sidebar>
    );
  }
}

const mapDispatchToProps = {
  fetchRepositories
};

const mapStateToProps = (state) => ({
  repositoriesStore: state.repositoriesStore,
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
