import React, { Component } from 'react';
import GenresFilter from './GenresFilter';
import FilterTitle from './../FilterTitle'

export default class Genres extends Component {
  render() {
    return (
        <div>
            < FilterTitle title="Genres" />
            <GenresFilter />
        </div>
    )
  }
}