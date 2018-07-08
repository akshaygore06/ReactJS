import React, { Component } from 'react';
import { ReactiveBase } from "@appbaseio/reactivesearch";

import SearchBar from './components/search/SearchBar';
import Gallery from './components/gallery/Gallery';
import LogoContainer from './components/LogoContainer';
import LeftFilterBar from './components/LeftFilterBar';
import ToggleFilter from './components/ToggleFilter';

import "./App.css";


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬 Show Filters"
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies"
    });
  }

  render() {
    const { isClicked, message } = this.state;
    const leftBarStyle = isClicked ? "left-bar-optional" : "left-bar"
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
              <LogoContainer />
              <SearchBar />
            </div>
            <div className="sub-container">
              <LeftFilterBar leftBarStyle={leftBarStyle} />
              < Gallery isClicked = {isClicked}/>
              <ToggleFilter handleClick={this.handleClick} message={message} />
            </div>
          </ReactiveBase>
        </div>
    );
  }
}
export default Main;