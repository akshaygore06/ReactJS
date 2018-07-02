import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import Actions from './../actions/index';

class SearchControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedOption: 'any',
        ageRange: {
          min : 21,
          max : 65
        }
    };
  }
  
  onOptionChange = event => {
    const { actions }  = this.props;
    const value = event.target.value;
    this.setState({
      selectedOption: value
    });
    actions.updateGender(value);
  }

  onResetButtonClick = event => {
    const { actions }  = this.props;
    const ageRange = {
      min : 18,
      max : 90
    }
    this.setState({
      selectedOption: "any",
      ageRange
    });
    actions.updateGender("any");
    actions.updateAgeRange(ageRange);
  
  }

  onRangeChangeComplete = value => {
    const { actions }  = this.props;
    this.setState({
      ageRange:{
        min: value.min,
        max: value.max
      }
    });
    actions.updateAgeRange(this.state.ageRange);
  }

  render() {
    const { ageRange, selectedOption } = this.state;
    return (
      <div className= "searchContainer">
        <div className= "searchTitle">
          Filter Search Results
        </div>
        <div>
          <div className= "headings">Age</div>
          <div className= "inputRangeContainer" >
            <InputRange
              draggableTrack
              maxValue={90}
              minValue={18}
              onChange={value => this.setState({
                ageRange: value
              })}
              onChangeComplete={this.onRangeChangeComplete}
              value={ageRange} />
          </div>
        </div>
        <div>
          <div className= "headings">Gender</div>
          <div className="radioContainer">
              <div className="radio">
                <label>
                  <input type="radio" value="any" 
                                checked={selectedOption === 'any'} 
                                onChange={this.onOptionChange} />
                  <span className="radioTitle"> Any </span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="male" 
                                checked={selectedOption === 'male'} 
                                onChange={this.onOptionChange} />
                 <span className="radioTitle"> Male </span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="female" 
                                checked={selectedOption === 'female'} 
                                onChange={this.onOptionChange} />
                  <span className="radioTitle"> Female </span>
                </label>
              </div>
            </div>
        </div>
        <div className="resetButtonContainer">
          <button onClick={this.onResetButtonClick}><span className="">Reset</span></button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = (state) => {
  return {};
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchControls);
