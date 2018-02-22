import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="signup-box col offset-md-4 col-md-4">
        <h2 className="text-center">Welcome back!</h2>  
        <div className="form-group">
            <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => this.signOut()}
              >
            Log out!
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
