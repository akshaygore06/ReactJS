import React, { Component } from 'react';
import "./../App.css";

export default class FilterTitle extends Component {
  render() {
      const { title } = this.props;
    return (
        <div className="filter-heading center">
            <b>
            {" "}
            <i className="fa fa-dollar" /> { title }{" "}
            </b>
        </div>
    )
  }
}