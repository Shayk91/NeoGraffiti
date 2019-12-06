import React, { Component } from 'react'
import { readOnePost, destroyPost, destroyComment } from '../services/api-helper'
import { Link, withRouter } from 'react-router-dom'
import CreateComment from './CreateComment'

class SingleImage extends Component {

  state = {
    post: {}
  }

  async componentDidMount() {
    const post = await readOnePost(this.props.postId)
    this.setState({
      post
    })
  }

  handleDelete = async () => {
    await destroyPost(this.props.postId)
    this.props.history.push("/")
  }

  handleCommentDelete = async (commentId) => {
    await destroyComment(commentId)
  }

  render() {
    const { post } = this.state
    return (
      <div id='singlePage'>
        <img id='single-image' src={post.image} alt={post.id} />
        <div id='single-right'>
          {
            post.user &&
            <div className='image-header'>
              <img className='user-image' src={post.user.image} alt={post.user.username} />
              <h1>{post.user.username}</h1>
            </div>
          }
          <div id='single-comments'>
            {
              post.user &&
              <div id='single-description'>
                <img className='user-image' src={post.user.image} alt={post.user.username} />
                <h1>{post.user.username}</h1>
                <p>{post.content}</p>
              </div>
            }
            {
              post.comments &&
              post.comments.map(comment => (
                <div className='single-comment' key={comment.id}>
                  {/* {
                    comment.user && */}
                  <div>
                    {/* <img className='user-image' src={comment.user.image} alt={comment.user.username} />
                      <h1>{comment.user.username}</h1> */}
                    <p>{comment.content}</p>
                  </div>
                  {/* } */}
                  {
                    this.props.currentUser &&
                      comment.user_id === this.props.currentUser.id ?
                      <button onClick={() => this.handleCommentDelete(comment.id)}>Delete</button>
                      :
                      <></>
                  }
                </div>
              ))
            }
          </div>
          <p id='single-time' className='time'>{post.timedistance} ago</p>
          <CreateComment
            postId={this.state.post.id}
            currentUser={this.props.currentUser}
          />
          {
            this.props.currentUser &&
              post.user_id === this.props.currentUser.id ?
              <div>
                <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                <button onClick={this.handleDelete}>Delete</button>
              </div>
              :
              <>
              </>
          }
        </div>
      </div >
    )
  }
}
export default withRouter(SingleImage)
