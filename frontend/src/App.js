import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={()=>(
          <Home/>
        )}/>
        <Route path='/posts/:post_id' render={(url)=>(
          <Post params={url.match.params}/>
        )}/>
        <Route path='/create/post' render={()=>(
          <CreatePost/>
        )}/>
      </div>
    );
  }
}

export default App;
