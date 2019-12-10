import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUser, readAllUserPosts } from '../services/api-helper'

export default class Profile extends Component {

  state = {
    user: {},
    posts: []
  }

  async componentDidMount() {
    const user = await getUser(this.props.userId)
    this.setState({
      user
    })
    const posts = await readAllUserPosts(this.props.userId)
    this.setState({
      posts
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('outside')
    if (prevProps.userId !== this.props.userId) {
      console.log('inside')
      const user = await getUser(this.props.userId)
      this.setState({
        user
      })
    }
  }

  render() {
    window.scrollTo(0, 0)
    const { user } = this.state
    return (
      <div id='profile-page'>
        {
          user.posts &&
          <div>
            <div id='top-profile'>
              <img className='user-image' src={user.image} alt={user.username} />
              <div id='profile-info'>
                <div id='profile-first'>
                  <h1>{user.username}</h1>
                  {
                    this.props.currentUser &&
                      this.props.currentUser.id === user.id ?
                      <div id='profile-links'>
                        <Link to={`/accounts/${user.id}/edit`}>Edit Profile</Link>
                        <Link to={`/accounts/${user.id}/add`}>Add Post</Link>
                      </div>
                      :
                      <>
                      </>
                  }
                </div>
                {
                  user.posts.length === 1 ?
                    <h2 id='profile-second'><span>{user.posts.length}</span> Post</h2>
                    :
                    <h2 id='profile-second'><span>{user.posts.length}</span> Posts</h2>
                }
                <div id='profile-third'>
                  <h2>{user.full_name}</h2>
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
            <div id='bottom-profile'>
              <h2>Posts</h2>
              <div id='profile-posts'>
                {
                  this.state.posts.map(post => (
                    <div className='post-div' key={post.id}>
                      <Link to={`/posts/${post.id}`}>
                        <img src={post.image} alt={post.id} />
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
