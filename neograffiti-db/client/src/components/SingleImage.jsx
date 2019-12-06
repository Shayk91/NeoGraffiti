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
            <div key={comment.id}>
              <p>{comment.content}</p>
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
        <p>{post.timedistance} ago</p>
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
    )
  }
}
export default withRouter(SingleImage)
