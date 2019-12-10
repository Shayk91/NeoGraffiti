import React from 'react'
import { createPost, readAllComments } from '../services/api-helper'
import { withRouter } from 'react-router-dom'

class CreatePost extends React.Component {

  state = {
    formData: {
      image: '',
      content: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
    this.props.handleChange(e)
  }

  // addPost = async (e) => {
  //   e.preventDefault();
  //   const formData = this.state.formData
  //   const userId = this.props.currentUser.id
  //   await createPost(userId, formData)
  //   this.props.history.push('/')
  // }

  render() {
    return (
      <div id='create-post'>
        <div id='show-picture'>
          {
            this.props.formData.image &&
            <img className='user-image' src={this.state.formData.image} alt={this.props.formData.id} />
          }
        </div>
        {
          this.props.formData &&
          <form onSubmit={
            this.props.handleSubmit
          }>
            <h1>New Post</h1>
            <input placeholder='Image Url' name="image" type="text" value={this.props.formData.image} onChange={this.handleChange} />
            <input placeholder='Write A Caption...' name="content" type="text" value={this.props.formData.content} onChange={this.props.handleChange} />
            <button>Share</button>
          </form>
        }
      </div>
    )
  }
}
export default withRouter(CreatePost)