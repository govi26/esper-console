// Importing react and external libraries
import React, { PureComponent } from 'react';

// Importing styles
import './LoginForm.scss';

export default class LoginForm extends PureComponent {
  render() {
    const { onSubmit } = this.props;
    return (
      <form className="login-form" name="login" onSubmit={onSubmit}>
        <input name="username" type="text" />
        {/* <input type="password" autoComplete="new-password " /> */}
        <input name="password" type="password" />
        <button type="submit">Login</button>
      </form>
    )
  }
}