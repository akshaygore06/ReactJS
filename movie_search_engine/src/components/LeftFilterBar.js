import React, { Component } from 'react';
import Revenue from './revenues/Revenue';
import Ratings from './ratings/Ratings';
import Languages from './languages/Languages';
import Genres from './genres/Genres';

export default class LogoContainer extends Component {
  render() {
      const { leftBarStyle } = this.props;
    return (
        <div className={leftBarStyle}>
            <Genres />
            <Revenue />
            <Ratings />
            <Languages />
        </div>
    )
  }
}