import React, { Component } from 'react'
import { readOnePost } from '../services/api-helper'

export default class SingleImage extends Component {

  state = {
    post: {}
  }

  async componentDidMount() {
    const post = await readOnePost(this.props.postId)
    this.setState({
      post
    })
  }

  render() {
    const { post } = this.state
    return (
      <div>
        {
          post.user &&
          <div>
            <img className='user-image' src={post.user.image} alt={post.user.username} />
            <h1>{post.user.username}</h1>
          </div>
        }
        <img src={post.image} />
        <p>{post.content}</p>
        {
          post.comments &&
          post.comments.map(comment => (
            <p>{comment.content}</p>
          ))
        }
        <p>{post.created_at}</p>
      </div>
    )
  }
}

