// Importing react and external libraries
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing containers
import Dashboard from './containers/dashboard';
import Home from './containers';
import Login from './containers/login';

import rootReducer from './reducers';

// Importing styles
import './index.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
)

const store = createStore(rootReducer);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
