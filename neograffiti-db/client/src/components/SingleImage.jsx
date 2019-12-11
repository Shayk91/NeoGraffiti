import React, { Component } from 'react'
import { readOnePost, destroyPost, destroyComment, readAllComments, createComment } from '../services/api-helper'
import { Link, withRouter } from 'react-router-dom'
import CreateComment from './CreateComment'
import menu from '../images/more.png'

class SingleImage extends Component {

  state = {
    post: {},
    comments: [],
    menu: false,
    commentFormData: {
      content: '',
      user_id: '',
      post_id: ''
    }
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
    if (this.props.currentUser) {
      this.setState({
        commentFormData: {
          user_id: this.props.currentUser.id,
          post_id: this.props.postId
        }
      })
    }
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

  addComment = async (e) => {
    e.preventDefault()
    const formData = this.state.commentFormData
    const userId = this.props.currentUser.id
    const postId = this.state.post.id
    const newComment = await createComment(userId, postId, formData)
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment]
    }))
    this.setState({
      commentFormData: {
        content: ''
      }
    })
  }

  handleCommentChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      commentFormData: {
        ...prevState.commentFormData,
        [name]: value
      }
    }))
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
    const comments = await readAllComments(this.props.postId)
    this.setState({
      comments
    })
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
                  {
                    comment.user &&
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
                  }
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
            handleSubmit={this.addComment}
            handleChange={this.handleCommentChange}
            formData={this.state.commentFormData}
          />
        </div>
      </div >
    )
  }
}
export default withRouter(SingleImage)
