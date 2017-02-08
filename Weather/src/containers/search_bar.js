import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

onInputChange(event){
    this.setState({term:event.target.value});
    //console.log(this.state.term);
  }


onFormSubmit(event){
  event.preventDefault();
}


  render(){
    return(
      <form onSubmit={ this.onFormSubmit} className = 'input-group'>
        <input
          value = {this.state.term}
          onChange = {this.onInputChange}
          placeholder = "Get a five-day forecast of your favorite cities"
          className = 'form-control'
           />
         <span className = "input-group-btn">
           <button type= "submit" className = 'btn btn-secondary '> Submit </button>
         </span>
       </form>

    );

  }






}
