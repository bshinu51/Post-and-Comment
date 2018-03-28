import React,{Component} from 'react';
import {createPost} from '../util/api';

class Home extends Component {
  constructor(props){
    super(props);
    this.onCreatePost = this.onCreatePost.bind(this);
  }
  state = {
    isDone: false
  }
  onCreatePost(event){
    event.preventDefault();
    const id = this.generateUUID();
    createPost({
      id: id,
      timestamp: Date.now(),
      title: event.target.title.value,
      body: event.target.body.value,
      author: event.target.author.value,
      category: event.target.category.value,
    })
    .then((response)=>{
      this.setState({isDone:true})
    });
  }
  generateUUID(){
    return Date.now();
  }
  render(){
    const isDone = this.state.isDone;
    return(
      isDone?(<div>Succeddfully created new post</div>):
        <div>
          <div className='postlist-title'>
            Create a new Post!
          </div>
          <div className='createPost'>
            <div>
            <form onSubmit={this.onCreatePost}>
              <input type='text' name='title' placeholder='Post title'/>
              <input type='text' name='body' placeholder='Post body'/>
              <input type='text' name='author' placeholder='Author name'/>
              <input type='text' name='category' placeholder='Category if any'/>
              <input type='submit' value='Submit!'/>
            </form>
            </div>
          </div>
        </div>
    );
  }
}
export default Home
