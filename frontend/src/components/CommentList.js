import React,{ Component} from 'react';
import * as api from '../util/api';
import Comment from './Comment';

class CommentList extends Component {
  state = {
    listOfComments:[],
    needToUpdate: true,
  }
  componentWillUpdate(){
    if(this.state.needToUpdate)
      api.getAllComments(this.props.post.id)
        .then((comments)=>{
          console.log(comments);
          this.setState({
            listOfComments: comments,
            needToUpdate: false,
          })
        })
  }
  render(){
    const listOfComments = this.state.listOfComments;
    return(
      <div>
        <ul>
          {listOfComments.map((comment)=>(
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentList
