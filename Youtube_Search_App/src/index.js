import React from 'react'
import ReactDOM from 'react-dom'
import Search from 'youtube-api-search'

const API_KEY = 'AIzaSyAa6Y5FE61xa27v5SOmx3OBUD8Ux-Ub8bg';

const opts = {
  maxResults: 10,
  key: API_KEY
};


const App = () => {
	return ( 
		<div>

			<div> 
				Search("Ironman",opts, (err,result) =>{
					// if(err){
					// 	return console.log(err);
					// }
					// else
					// {
						console.dir(results)
					//}
				})
			</div>

		 </div>	



		)
}

ReactDOM.render(<App />, document.querySelector('.container'))