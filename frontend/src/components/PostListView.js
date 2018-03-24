import React, {Component} from 'react';

class PostListView extends Component{
  render(){
    const post = this.props.post;
    return(
      <div className='postlist' >
        <a className='postlistTitle' href={'posts/'+post.id}>
          <li>
            {post.title}
          </li>
        </a>
        <div className='postlistBody'>
          {post.body}
        </div>
      </div>
    )
  }
}

export default PostListView
