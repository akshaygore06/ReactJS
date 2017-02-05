import _ from 'lodash';
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

		this.state = { 
			videos:[],
			selectedVideo : null
			 };

		this.videoSearch('singham')

	}


	videoSearch(term){


		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 });
		
		});

	}



	render(){

		const VideoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return ( 
		<div>
			<div>
				<SearchBar onSearchTermChange= { VideoSearch } />
				<VideoDetail video= { this.state.selectedVideo }/>
				<VideoList
				 onVideoSelect = { selectedVideo => this.setState({ selectedVideo})}
				 videos={this.state.videos} 

				 />
			</div>	
			
		</div>	

		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))