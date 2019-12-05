import React, { Component } from 'react'
import { readOnePost } from '../services/api-helper'
import { Link } from 'react-router-dom'

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
        <img src={post.image} alt={post.id} />
        <p>{post.content}</p>
        {
          post.comments &&
          post.comments.map(comment => (
            <p key={comment.id}>{comment.content}</p>
          ))
        }
        <p>{post.timedistance} ago</p>
        {
          this.props.currentUser &&
            post.user_id === this.props.currentUser.id ?
            <div>
              <Link to={`/posts/${post.id}/edit`}>Edit</Link>
              <button>Delete</button>
            </div>
            :
            <>
            </>
        }
      </div>
    )
  }
}

