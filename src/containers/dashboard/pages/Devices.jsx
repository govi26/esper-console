// Importing react
import React, { Fragment } from 'react';

// Importing abstract page
import AbstractPage from './Abstract';

// Importing constsnt
import { API_HOST } from '../../../constants/endpoints';

export default class Devices extends AbstractPage {

  /**
   * Overridding _constructURL function
   */
  _constructURL() {
    const { enterprise } = this.props.data;
    return `${API_HOST}/api/enterprise/${enterprise}/device/`;
  }

  /**
   * Helper to constrcut card children
   * @param {Object} d
   */
  _getChildren(d) {
    return (
      <Fragment>
        <h3>{d['device_name']}</h3>
        <p></p>
      </Fragment>
    )
  }
}