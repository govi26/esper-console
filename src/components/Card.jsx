// Importing react and external libraries
import React, { PureComponent } from 'react';

// Importing styles
import './Card.scss';

export default class Card extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="card">
        {children}
      </div>
    );
  }
}