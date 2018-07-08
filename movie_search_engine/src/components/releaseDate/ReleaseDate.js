import React, { Component } from 'react';
import { DateRange } from '@appbaseio/reactivesearch'
import "./../../App.css";

export default class ReleaseDate extends Component {
  render() {
    return (
        <DateRange
            componentId="date-filter"
            dataField="release_date"
            className="datePicker"
        />
    )
  }
}