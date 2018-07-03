import React, { Component } from 'react';
import { SelectedFilters, ResultCard } from '@appbaseio/reactivesearch'

export default class Gallery extends Component {
  render() {

    return (
        <div
            className={
            this.props.isClicked
                ? "result-container-optional"
                : "result-container"
            }
        >
        <SelectedFilters
        showClearAll={true}
        clearAllLabel="Clear filters"
        />

        <ResultCard
        componentId="results"
        dataField="original_title"
        react={{
            and: [
            "mainSearch",
            "RangeSlider",
            "language-list",
            "date-filter",
            "genres-list",
            "revenue-list"
            ]
        }}
        pagination={true}
        className="Result_card"
        paginationAt="bottom"
        pages={5}
        size={18}
        Loader="Loading..."
        noResults="No results were found..."
        sortOptions={[
            {
            dataField: "revenue",
            sortBy: "desc",
            label: "Sort by Revenue(High to Low) \u00A0"
            },
            {
            dataField: "popularity",
            sortBy: "desc",
            label: "Sort by Popularity(High to Low)\u00A0 \u00A0"
            },
            {
            dataField: "vote_average",
            sortBy: "desc",
            label: "Sort by Ratings(High to Low) \u00A0"
            },
            {
            dataField: "original_title.raw",
            sortBy: "asc",
            label: "Sort by Title(A-Z) \u00A0"
            }
        ]}
        innerClass={{
            title: "result-title",
            listItem: "result-item",
            list: "list-container",
            sortOptions: "sort-options",
            resultStats: "result-stats",
            resultsInfo: "result-list-info",
            poweredBy: "powered-by"
        }}
        onData={function(res) {
            return {
            description: (
                <div className="main-description">
                <div className="ih-item square effect6 top_to_bottom">
                    <a
                    target="#"
                    href={"http://www.imdb.com/title/" + res.imdb_id}
                    >
                    <div className="img">
                        <img
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            res.poster_path
                        }
                        alt={res.original_title}
                        className="result-image"
                        />
                    </div>
                    <div className="info colored">
                        <h3 className="overlay-title">
                        {res.original_title}
                        </h3>

                        <div className="overlay-description">
                        {res.tagline}
                        </div>

                        <div className="overlay-info">
                        <div className="rating-time-score-container">
                            <div className="sub-title Rating-data">
                            <b>
                                Imdb
                                <span className="details">
                                {" "}
                                {res.vote_average}/10{" "}
                                </span>
                            </b>
                            </div>
                            <div className="time-data">
                            <b>
                                <span className="time">
                                <i className="fa fa-clock-o" />{" "}
                                </span>{" "}
                                <span className="details">
                                {res.time_str}
                                </span>
                            </b>
                            </div>
                            <div className="sub-title Score-data">
                            <b>
                                Score:
                                <span className="details">
                                {" "}
                                {res.score}
                                </span>
                            </b>
                            </div>
                        </div>
                        <div className="revenue-lang-container">
                            <div className="revenue-data">
                            <b>
                                <span>Revenue:</span>{" "}
                                <span className="details">
                                {" "}
                                ${res.or_revenue}
                                </span>{" "}
                            </b>
                            </div>

                            <div className="sub-title language-data">
                            <b>
                                Language:
                                <span className="details">
                                {" "}
                                {res.original_language}
                                </span>
                            </b>
                            </div>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
            ),
            url: "http://www.imdb.com/title/" + res.imdb_id
            };
        }}
        />
    </div>
    )
  }
}