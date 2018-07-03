import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostIndex from './components/post_index';

const Greeting = () => {
   return <div> Hey There!!!</div>
}


export default(
<Route path='/' component = { App} >
   <IndexRoute  component= { PostIndex }  />
   <Route path= "greet" component={ Greeting }/>
   <Route path= "greet2" component={ Greeting }/>
   <Route path= "post" component={ Greeting }/>
   <Route path= "contact" component={ Greeting }/>

</Route>
);
