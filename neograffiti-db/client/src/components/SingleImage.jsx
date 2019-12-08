import React, { Component } from 'react'
import { readOnePost, destroyPost, destroyComment, readAllComments } from '../services/api-helper'
import { Link, withRouter } from 'react-router-dom'
import CreateComment from './CreateComment'
import menu from '../images/more.png'

class SingleImage extends Component {

  state = {
    post: {},
    comments: [],
    menu: false
  }

  async componentDidMount() {
    const post = await readOnePost(this.props.postId)
    this.setState({
      post
    })
    const comments = await readAllComments(this.props.postId)
    this.setState({
      comments
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('outside')
    if (prevState.comments.length !== this.state.comments.length) {
      console.log('inside')
      const comments = await readAllComments(this.props.postId)
      this.setState({
        comments
      })
    }
  }

  handleMenu = () => {
    this.setState({
      menu: true
    })
  }

  handleExit = () => {
    this.setState({
      menu: false
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
    window.scrollTo(0, 0)
    const { post } = this.state
    return (
      <div id='singlePage'>
        <img id='single-image' src={post.image} alt={post.id} />
        <div id='single-right'>
          {
            post.user &&
            <div className='image-header'>
              <Link to={`/accounts/${post.user_id}`}>
                <img className='user-image' src={post.user.image} alt={post.user.username} />
              </Link>
              <Link to={`/accounts/${post.user_id}`}>
                <h1>{post.user.username}</h1>
              </Link>
              {
                this.props.currentUser &&
                  post.user_id === this.props.currentUser.id ?
                  <div>
                    <img onClick={this.handleMenu} id='menu' src={menu} alt='menu' />
                    {
                      this.state.menu !== false ?
                        <div id='modal'>
                          <p onClick={this.handleExit}>x</p>
                          <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                          <button onClick={this.handleDelete}>Delete</button>
                        </div>
                        :
                        <></>
                    }
                  </div>
                  :
                  <>
                  </>
              }
            </div>
          }
          <div id='single-comments'>
            {
              post.user &&
              <div id='single-description'>
                <Link className='description-user' to={`/accounts/${post.user_id}`}>
                  <img className='user-image' src={post.user.image} alt={post.user.username} />
                </Link>
                <Link className='description-user' to={`/accounts/${post.user_id}`}>
                  <h1>{post.user.username}</h1>
                </Link>
                <p>{post.content}</p>
              </div>
            }
            {
              this.state.comments.map(comment => (
                <div className='single-comment' key={comment.id}>
                  <div id='single-description'>
                    <Link className='description-user' to={`/accounts/${comment.user_id}`}>
                      <img className='user-image' src={comment.user.image} alt={comment.user.username} />
                    </Link>
                    <Link className='description-user' to={`/accounts/${comment.user_id}`}>
                      <h1>{comment.user.username}</h1>
                    </Link>
                    <p>{comment.content}</p>
                    {
                      this.props.currentUser &&
                        comment.user_id === this.props.currentUser.id ?
                        <button onClick={() => this.handleCommentDelete(comment.id)}>Delete</button>
                        :
                        <></>
                    }
                  </div>
                </div>
              ))
            }
          </div>
          <Link className='time-link' to={`/posts/${post.id}`}>
            <p id='single-time' className='time'>{post.timedistance} ago</p>
          </Link>
          <CreateComment
            postId={this.state.post.id}
            currentUser={this.props.currentUser}
          />
        </div>
      </div >
    )
  }
}
export default withRouter(SingleImage)
