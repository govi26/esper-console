// Importing react and external libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Importing actions
import { setInitialData } from '../../actions';

// Importing components
import LoginForm from '../../components/LoginForm';

// Importing constant
import { API_HOST } from '../../constants/endpoints';

// Importing assets
import LOGO_URL from '../../assets/esper-logo.svg';

// Importing styles
import './index.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    }

    this._onSubmit = this._onSubmit.bind(this);
  };

  render() {
    const { message } = this.state;

    return (
      <div className="login">
        <div className="login-detail">
          <img src={LOGO_URL} alt="esper-logo" />
          <h2>Login to your account</h2>
          <div className="login-card">
            <LoginForm onSubmit={this._onSubmit} />
            {message && <p className="error-text">{message}</p>}
          </div>
        </div>
      </div>
    )
  }

  /**
   * Login to account
   * @param {Object} event
   */
  async _onSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    const formData = new FormData(event.target);
    const URL = `${API_HOST}/api/login/`;
    const response = await fetch(URL, {
      body: JSON.stringify({
        password: formData.get('password'),
        username: formData.get('username')
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });

    const responseJson = await response.json();
    if (responseJson.errors) {
      return this.setState({ message: responseJson.message });
    }

    const { user: { profile: { enterprise } }, token } = responseJson;
    dispatch(setInitialData({ enterprise, token }));
    return this.props.history.replace('/dashboard');
  }
}

export default connect()(Login);