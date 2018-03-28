import React, {Component} from 'react';
import {Button, Icon} from 'react-materialize';

class PostListView extends Component{
  state = {
    isModal:false,
  }
  editPost(){
    console.log('Editing the post');
  }
  render(){
    const post = this.props.post;
    return(
      <div>
        {console.log(post)}
        <span>
          <a className='postTitle' href={'posts/'+post.id}>
            <li>
              {post.title}
            </li>
          </a>
          <span className='edit'>
            <Button className='uiButton' waves='light' onClick={this.editPost}><Icon>edit</Icon></Button>
          </span>
        </span>
        <div className='postBody'>
          {post.body}
        </div>
      </div>
    )
  }
}

export default PostListView
