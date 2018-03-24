import React,{Component} from 'react';
import PostList from './PostList';

class Home extends Component {

  render(){
    return(
      <div className='container'>
        {/*<div className='searchBar'>
          <div className='searchBarWrapper'>
            <input className='inputBar' type='text'/>
          </div>
        </div>*/}
        <PostList />
      </div>
    );
  }
}
export default Home
