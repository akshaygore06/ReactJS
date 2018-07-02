import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from './../actions/index';
import AppUtils from '../utils/AppUtils';
import Modal from 'react-responsive-modal';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
        open: false,
        person: null
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  renderDetailPage = person => {
    this.setState({ person });
    this.onOpenModal();
  }
  
  renderList = () => {
    const { matchData } = this.props;
    let arr;
    if(matchData) {
      arr =  matchData.map( m => {
        const src = m.picture.medium;
        const age = AppUtils.findAge(m);
        const fullname = m.name.first + " " + m.name.last;
        const username = m.login.username;
        return(
        <div key={username} className="photoContainer">
          <img alt="" src={src} className="thumbnail" />
          <div className="buttonContainer">
            <div>{fullname}</div>
            <div>{age}</div>
            <button onClick={() => this.renderDetailPage(m)}>Contact</button>
          </div>
          
        </div>)
      })
    }
    return arr;
  }

  render() {
    const { open, person } = this.state;
    const { matchData, noDataFound } = this.props;
    const email = !!person ? person.email : {};
    const fullname = !!person ? person.name.first + " " + person.name.last: "";
    const cell = !!person ? person.cell : "";
    const phone = !!person ? person.phone : "";
    const src = !!person ? person.picture.large : "";
    const matchDataLength = !!matchData ? matchData.length : 0;
    const matchString = matchDataLength > 0 ? (matchDataLength === 1 ? " Match Found": " Matches Found"): "";
    const matchTextClass = matchDataLength > 0 ? 'matchTextClass' : "hide";
    const photoGalleryClass = noDataFound ? 'photoGallery hide' : 'photoGallery';
    const noDataClass = noDataFound ? 'noData': 'noData hide';
    
    return (
      <div className="photoGalleryContainer">
        <div className={noDataClass}>
          Sorry No Match Found!! :( 
        </div>
        <div className={matchTextClass} >
          {matchDataLength}{matchString}
        </div>
        <div className={photoGalleryClass}>
          {this.renderList()}
        </div>
        <div>
          <Modal
            open={open}
            onClose={this.onCloseModal}
            center
            classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
            <div className="modalHeader">
              {fullname}
            </div>
              <div className="modalInnerContainer">
                <img alt="" src={src} className="modalImage"/>
                <div className="modalDetailsContainer">
                  <div>Email: {email}</div>
                  <div>Cell : {cell}</div>
                  <div>Phone: {phone}</div>
                </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = (state) => {
  const { ageRange, gender } = state.filter;
  const  allData  = state.users.userData || [];
  let noDataFound = false;
  let matchData;
  if(allData.length > 0) {
    matchData = AppUtils.filterData(allData, ageRange, gender)  
    if(matchData.length === 0) {
      noDataFound = true;
    }
}

return {
    matchData: matchData,
    noDataFound
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
