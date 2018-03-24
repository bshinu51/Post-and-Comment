import React, {Component} from 'react';
import * as api from '../util/api';
import CommentList from './CommentList';

class Post extends Component {
  state = {
    post: {},
  }
  componentWillMount(){
    api.getPost(this.props.params.post_id)
      .then((posts)=>{
        this.setState({
          post: posts,
        })
      });
  }
  render(){
    const post = this.state.post;
    return(
      <div className='container'>
        {post.deleted?'':
          <div>
            <div>
              <span>{post.title}</span>
              <span> {new Date(post.timestamp).toLocaleDateString()}</span>
            </div>
            <div>
              {post.body}
            </div>
            <div>
                <CommentList post={post} />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Post;
