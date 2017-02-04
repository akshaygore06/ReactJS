import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'; 
const API_KEY = 'AIzaSyAa6Y5FE61xa27v5SOmx3OBUD8Ux-Ub8bg';


YTSearch({key: API_KEY, term: 'singham'}, function(data){
	console.log(data);
});



class App extends Component{
	render(){
		return ( 
		<div>
			<div>
				<SearchBar />
			</div>	
			
		</div>	

		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))