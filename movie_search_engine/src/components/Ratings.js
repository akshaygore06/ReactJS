import React, { Component } from 'react'
import { RangeSlider } from '@appbaseio/reactivesearch'
import "./../App.css";

export default class Ratings extends Component {
  render() {
    return (
        <RangeSlider
            componentId="RangeSlider"
            dataField="vote_average"
            className="review-filter"
            range={{
                start: 0,
                end: 10
            }}
            rangeLabels={{
                start: "0",
                end: "10"
            }}
            react={{
                and: [
                "mainSearch",
                "results",
                "language-list",
                "date-Filter",
                "genres-list",
                "revenue-list"
                ]
            }}
        />
    )
  }
}