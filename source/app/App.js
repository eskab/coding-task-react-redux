import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginBox from './containers/LoginBox'
import AppBox from './components/AppBox'

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.user.logged) {
      return (
        <AppBox view={this.props.view} />
      );
    } else {
      return (
        <LoginBox />
      );      
    }
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App)