import React, {Component} from 'react';
import * as api from '../util/api';

class Post extends Component {
  state = {
    post: {},
  }
  componentWillMount(){
    api.getPost(this.props.params.post_id)
      .then((posts)=>{this.setState({
        post: posts,
      })});
  }
  render(){
    return(
      <h2>
        Post {console.log(this.state.post)}
      </h2>
    )
  }
}

export default Post;
