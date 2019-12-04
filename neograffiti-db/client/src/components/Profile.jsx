import React, { Component } from 'react'
import { getUser } from '../services/api-helper'

export default class Profile extends Component {

  state = {
    user: {}
  }

  async componentDidMount() {
    const user = await getUser(this.props.userId)
    this.setState({
      user
    })
  }

  render() {
    const { user } = this.state
    return (
      <div>
        {
          user.posts &&
          <div>
            <img className='user-image' src={user.image} alt={user.username} />
            <h1>{user.username}</h1>
            <h2>{user.posts.length} Posts</h2>
            <h2>{user.full_name}</h2>
            <p>{user.bio}</p>
            <h2>Posts</h2>
            {
              user.posts.map(post => (
                <img src={post.image} alt={post.id} />
              ))
            }
          </div>
        }
      </div>
    )
  }
}
