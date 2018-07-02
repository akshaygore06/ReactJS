import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppUtils from './../utils/AppUtils';
import Actions from './../actions/index';

import Gallery from './Gallery';
import Header from './Header';
import SearchControls from './SearchControls';

class Initial extends Component {
 
    componentWillMount() {
        const { actions } = this.props;
        AppUtils.fetchData()
        .then(data => {
          actions.updateUserData(data);
        })
        .catch(e =>{
          alert("Unable to load the user data", e.message);
        });        
    }

  render() {
    return (
      <div>
          <Header />
          <div className= "initialContainer">
            <SearchControls />
            <Gallery />
          </div>
      </div>
      
    );
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators( Actions, dispatch)
});

const mapStateToProps = (state) => {
  return {};
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Initial);
