import React, { Component } from 'react'
import { MultiDataList } from '@appbaseio/reactivesearch'
import "./../App.css";

export default class Languages extends Component {
  render() {
    return (
        <MultiDataList
            componentId="language-list"
            dataField="original_language.raw"
            className="language-filter"
            size={100}
            sortBy="asc"
            queryFormat="or"
            selectAllLabel="All Languages"
            showCheckbox={true}
            showSearch={true}
            placeholder="Search for a language"
            react={{
            and: [
                "mainSearch",
                "results",
                "date-filter",
                "RangeSlider",
                "genres-list",
                "revenue-list"
            ]
            }}
            data={[
            {
                label: "English",
                value: "English"
            },
            {
                label: "Chinese",
                value: "Chinese"
            },
            {
                label: "Turkish",
                value: "Turkish"
            },
            {
                label: "Swedish",
                value: "Swedish"
            },
            {
                label: "Russian",
                value: "Russian"
            },
            {
                label: "Portuguese",
                value: "Portuguese"
            },
            {
                label: "Korean",
                value: "Korean"
            },
            {
                label: "Japanese",
                value: "Japanese"
            },
            {
                label: "Italian",
                value: "Italian"
            },
            {
                label: "Hindi",
                value: "Hindi"
            },
            {
                label: "French",
                value: "French"
            },
            {
                label: "Finnish",
                value: "Finnish"
            },
            {
                label: "Spanish",
                value: "Spanish"
            },
            {
                label: "Deutsch",
                value: "Deutsch"
            }
            ]}
            showFilter={true}
            filterLabel="Language"
            URLParams={false}
            innerClass={{
            label: "list-item",
            input: "list-input"
            }}
        />
    )
  }
}