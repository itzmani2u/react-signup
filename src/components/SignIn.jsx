import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  render() {
    return (
      <div className="signup-box col offset-md-4 col-md-4">
        <ul className="tab-switch-nav no-gutter">
          <li className="text-center tab-switch-nav-active"><Link  to={'/signup'}>Sign Up</Link></li>
          <li className="text-center"><Link  to={'/signin'}>Log In</Link></li>
        </ul>
        <h2 className="text-center">Sign Up for Free</h2>
        <div className="form-group">
            <input
            className="form-control"
            type="text"
            placeholder="Email"
            onChange={event => this.setState({email: event.target.value})}
          />
        </div>
         <div className="form-group">
            <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={event => this.setState({password: event.target.value})}
          />
        </div>  
        <div className="form-group">
            <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => this.signIn()}
              >
            Log In
          </button>
            <div className="alert alert-error">{this.state.error.message}</div>
        </div>
      </div>
    )
  }
}

export default SignIn;
