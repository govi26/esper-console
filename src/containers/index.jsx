// Importing react and external libraries
import React, { Component } from 'react';

// Importing assets
import LOGO_URL from '../assets/esper-logo.svg';

// Importing styles
import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-detail">
          <img src={LOGO_URL} alt="esper-logo" />
          <div>
            <h2>Welcome to Esper.io</h2>
            <button onClick={() => this.props.history.push('/login')}>Login to continue</button>
          </div>
        </div>
      </div>
    )
  }
}