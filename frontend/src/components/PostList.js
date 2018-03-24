import React, {Component} from 'react';
import * as api from '../util/api';
import PostListView from './PostListView';

class PostList extends Component {
  state = {
    posts: [],
    categories: [],
    isPost:false,
    cat: '',
  }
  changeCategory = (option) => {
    this.setState((prevState)=>(
      {
        posts: prevState.posts,
        categories: prevState.categories,
        isPost: option.value==='All',
        cat: option.value!=='All'?option.value:'',
      }
    ))
  }
  componentWillMount(){
    api.getCategories()
      .then((categories)=> {
        api.getAll()
          .then((posts)=>{this.setState({
            posts: posts,
            categories: categories,
            isPost:true,
            cat:'',
          })})
      });
  }
  render(){
    const posts = this.state.posts;
    const categories = this.state.categories;
    categories.map((c)=>console.log(c));
    return(
      <div className='postlists'>
        <div>
          Category:
          <select value={this.state.cat} onChange={(event)=>this.changeCategory(event.target)}>
            <option value="All">All</option>
            {categories?categories.map((category)=>(
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            )):''}
          </select>
        </div>
        <div>
          <ol>
            {this.state.isPost?posts.map((post)=>(
              <PostListView key={post.id} post={post}/>
            )):this.state.cat?posts.filter((post)=>(
              post.category===this.state.cat)).map((post)=>(
                <PostListView key={post.id} post={post}/>
              )):''}
          </ol>
        </div>
      </div>
    )
  }
}

export default PostList
