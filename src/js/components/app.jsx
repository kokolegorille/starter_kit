import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './nav_bar';

import LoadingDots from './common/loading_dots';
import { 
  appBootup, 
  sendPing 
} from '../actions/application_actions';

class App extends Component {
  componentWillMount() {
    // Application is starting...
    this.props.appBootup(Date.now());
    this.props.sendPing();
  }
  
  renderSpinner() {
    // Communication is really very fast! and the spinner might just blink.
    if (!this.props.isLoading) return;
    return <LoadingDots interval={100} dots={20} />
  }
  
  renderNavBar() {
    return <NavBar />;
  }
  
  render() {
    return (
      <div id="wrapper">
        <header>
          {this.renderNavBar()}
          <div>
            {this.renderSpinner()}
          </div>
        </header>
        <main role="main">
          {this.props.children}
        </main>
        <footer>
          <p>&copy; hf 2017</p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  appBootup: PropTypes.func.isRequired,
  sendPing: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

const mapStateToProps = ({application}) => {
  return { 
    isLoading: application.isLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    appBootup,
    sendPing
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App);