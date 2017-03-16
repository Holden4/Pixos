import React from 'react'
import SignInForm from './SignInForm.jsx'

import io from 'socket.io-client';
const socket = io.connect(`${window.location.origin}`);

export default class SignInPage extends React.Component {

  render() {
    return (
      <div>
        <h2>Sign In!</h2>
        {<SignInForm />}
      </div>
    );
  }
}
