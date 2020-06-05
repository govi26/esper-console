// Importing react and external libraries
import React, { Component } from 'react';

// Importing components
import Card from '../../../components/Card';

export default class AbstractPage extends Component {
  constructor(props) {
    super(props);
    const err = {
      100: 'Cannot create AbstractPage instances directly',
      101: 'Must override method',
    };
    if (this.constructor.name === AbstractPage) {
      throw new TypeError(err[100]);
    }


    ['_constructURL', '_getChildren'].forEach((func) => {
      if (!(typeof this['_constructURL'] === 'function')) {
        throw new TypeError(`${err[101]} _constructURL`);
      }
    })

    this.state = {
      data: null,
      errorMessage: null
    }
  }

  componentDidMount() {
    this._loadData();
  }

  render() {
    const { data } = this.state;

    return data
      ? data.length > 0
        ? data.map((d, index) => (<Card key={index}>{this._getChildren(d)}</Card>))
        : <p>Data not availble.</p>
      : <p>Loading data..</p>;
  }

  async _loadData() {
    const { token } = this.props.data;

    const url = this._constructURL();
    const response = await fetch(url, {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET',
    });

    const { errors, results, message } = await response.json();
    this.setState({
      data: results || [],
      errorMessage: errors && message
    })
  }
}
