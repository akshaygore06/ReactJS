import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component{
    
    renderList(){
        return this.props.books.map((book) => { 
            return (
                
                        <li
                            onClick = {() => this.props.selectBook(book)}
                            key = { book.title } 
                            className= 'list-group-item'> { book.title } 
                        </li>
                    );
        });
    }
    
    
    render(){
        return(
            <ul className= 'list-group col-md-4'>
            { this.renderList() }
            </ul>
        );
    };
}


function mapStateToProps(state){
    return {
        books: state.books    
    };
    
}


function mapDispachToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}


export default connect(mapStateToProps, mapDispachToProps)(BookList);
