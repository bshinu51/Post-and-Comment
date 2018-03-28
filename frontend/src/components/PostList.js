import React, {Component} from 'react';
import * as api from '../util/api';
import PostListView from './PostListView';
import {Icon} from 'react-materialize';

class PostList extends Component {
  state = {
    posts: [],
    categories: [],
    isPost:false,
    cat: '',
    sortBy: 'time',
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
  sortBy(value) {
    console.log('sort by: '+value);
    this.setState((prevState)=>({
      posts: prevState.posts,
      categories: prevState.categories,
      isPost:prevState.isPost,
      cat: prevState.cat,
      sortBy: value,
    }))
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
      <div className='postlist-home'>
        <div className='postlist-title'>
          <span className='leftAlign'>
            <a className='postlist-title-add-post' href='create/post'><Icon className='postlist-title-add-post'>add</Icon>Add a new post</a>
          </span>
          <span className='postlist-title-logo'>
            Q&A
          </span>
          <span className='rightAlign'>
            <span>
              Category:
              <select value={this.state.cat} onChange={(event)=>this.changeCategory(event.target)}>
                <option value="All">All</option>
                {categories?categories.map((category)=>(
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                )):''}
              </select>
            </span>
            <span>
              Sort by:
              <select value={this.state.sortBy} onChange={(e)=>this.sortBy(e.target.value)}>
                <option value='time'>Time</option>
                <option value='score'>Score</option>
              </select>
            </span>
          </span>
        </div>
        <div className='postlist-body'>
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
