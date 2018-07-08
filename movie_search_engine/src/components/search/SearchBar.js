import React, { Component } from 'react';
import { DataSearch } from '@appbaseio/reactivesearch'
import "./../../App.css";

export default class SearchBar extends Component {
  render() {
    return (
    <div className="search-container">
        <DataSearch
            componentId="mainSearch"            
            dataField={["original_title.search"]}                      
            className="search-bar"            
            queryFormat="and"            
            placeholder="Search for movies..."
        />
      </div>
    )
  }
}