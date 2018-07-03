import React, { Component } from 'react';
import  SearchBar from './components/SearchBar';
import Genres from './components/Genres';
import Revenue from './components/Revenue';
import Ratings from './components/Ratings';
import Languages from './components/Languages';
import ReleaseDate from './components/ReleaseDate';
import Gallery from './components/Gallery';

import { ReactiveBase } from "@appbaseio/reactivesearch";
import "./App.css";


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters"
    };
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies"
    });
  }


  render() {
    return (
      <div className="main-container">
          <ReactiveBase
            app="G1MovieE"
            credentials="9ebkVDmS1:e0f3b290-1026-4acc-9131-62ba8e730fa6"
            theme={{
              typography: {
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
                fontSize: "16px"
              },
              colors: {
                textColor: "#fff",
                backgroundColor: "#212121",
                primaryTextColor: "#fff",
                primaryColor: "#2196F3",
                titleColor: "#fff",
                alertColor: "#d9534f",
                borderColor: "#666"
              }
            }}
          >
            <div className="navbar">
              <div className="logo-container">
                {/* <img
                  className="app-logo"
                  src="Images/logo.jpg"
                  alt="MovieSearch"
                /> */}
                Gore Movie Engine
              </div>

              {/* <div className="search-container"> */}
                <SearchBar  />
              {/* </div> */}
            </div>
            <div className="sub-container">
              <div
                className={
                  this.state.isClicked ? "left-bar-optional" : "left-bar"
                }
              >
                <div className="filter-heading center">
                  <b>
                    {" "}
                    <i className="fa fa-pied-piper-alt" /> Genres{" "}
                  </b>
                </div>
                <Genres />
                <hr className="blue" />
                <div className="filter-heading center">
                  <b>
                    {" "}
                    <i className="fa fa-dollar" /> Revenue{" "}
                  </b>
                </div>

                <Revenue />
                <hr className="blue" />

                <div className="filter-heading center">
                  <b>
                    <i className="fa fa-star" /> Ratings
                  </b>
                </div>
                <Ratings/>
                <hr className="blue" />
                <div className="filter-heading center">
                  <b>
                    {" "}
                    <i className="fa fa-language" /> Languages{" "}
                  </b>
                </div>
                <Languages />
                <hr className="blue" />

                <div className="filter-heading center">
                  <b>
                    {" "}
                    <i className="fa fa-calendar" /> Release Date{" "}
                  </b>
                </div>
                
                <ReleaseDate />
              </div>
              < Gallery isClicked = {this.state.isClicked}/>
              

              {/* <button
                className="toggle-button"
                onClick={this.handleClick.bind(this)}
              >
                {this.state.message}
              </button> */}
            </div>
          </ReactiveBase>
        </div>
    );
  }
}
export default Main;