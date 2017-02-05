import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'; 
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAa6Y5FE61xa27v5SOmx3OBUD8Ux-Ub8bg';






class App extends Component{

	constructor(props){
		super(props);

		this.state = { videos:[] };

	YTSearch({key: API_KEY, term: 'singham'}, (videos) => {
		this.setState({ videos });
	});

	}


	render(){
		return ( 
		<div>
			<div>
				<SearchBar />
				<VideoDetail video= {this.state.videos[0]}/>
				<VideoList videos={this.state.videos }/>
			</div>	
			
		</div>	

		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))