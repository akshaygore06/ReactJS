import React, { Component } from 'react';
import { MultiList } from '@appbaseio/reactivesearch'

export default class SearchBar extends Component {
  render() {
    return (
        <MultiList
            componentId="genres-list"
            dataField="genres_data.raw"
            className="genres-filter"
            size={20}
            sortBy="asc"
            queryFormat="or"
            selectAllLabel="All Genres"
            showCheckbox={true}
            showCount={true}
            showSearch={true}
            placeholder="Search for a Genre"
            react={{
            and: [
                "mainSearch",
                "results",
                "date-filter",
                "RangeSlider",
                "language-list",
                "revenue-list"
            ]
            }}
            showFilter={true}
            filterLabel="Genre"
            URLParams={false}
            innerClass={{
            label: "list-item",
            input: "list-input"
            }}
        />
    )
  }
}