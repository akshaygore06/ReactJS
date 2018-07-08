import React, { Component } from 'react';

export default class LogoContainer extends Component {
  render() {
      const { handleClick, message } = this.props;
    return (
        <button className="toggle-button" onClick={handleClick}>
            {message}
        </button>
    )
  }
}