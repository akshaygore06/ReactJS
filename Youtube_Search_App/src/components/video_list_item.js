import React, { Component } from 'react'



const VideoListItem = ({ onVideoSelect, video })=>{


	const imageUrl = video.snippet.thumbnails.default.url;


	return (

		<li className = "list-group-item"   onClick = {() => onVideoSelect(video)} >

			<div className = " video-list media ">
				<div className= "media-left">
					<img  className = "media-object" src={ imageUrl } />
				</div>
				<div className = "media-body">
					<div className= "media-heading"> <strong>{ video.snippet.title } </strong></div>
					<p> {video.snippet.description} </p>
				</div>



			</div> 



		</li>

		);

};

export default VideoListItem;