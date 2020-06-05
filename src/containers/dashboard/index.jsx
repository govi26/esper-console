// Importing react and external libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Importing pages
import Groups from './pages/Groups';
import Devices from './pages/Devices';

// Importing styles
import './index.scss';

class Dashboard extends Component {
  render() {
    const { match: { path } } = this.props;
    const { token } = this.props.data;

    if (!token) {
      return <Redirect to="/login" />
    }

    return (
      <Router basename={path}>
        <div className="dashboard">
          <div className="sidebar">
            <h2>User's dashboard</h2>
            <hr />
            <ul>
              <li><Link to="/devices">Devices</Link></li>
              <li><Link to="/groups">Groups</Link></li>
            </ul>
          </div>
          <div className="content">
            <div className="content-container">
              <Switch>
                <Route path="/devices" render={() => <Devices {...this.props} />} />
                <Route path="/groups" render={() => <Groups  {...this.props} />} />
              </Switch>
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

const mapStateToProps = state => ({ data: state })
export default connect(mapStateToProps)(Dashboard)


