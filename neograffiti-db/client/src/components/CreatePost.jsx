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
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = this.state.formData
    const userId = this.props.currentUser.id
    await createPost(userId, formData)
    this.props.history.push('/')
  }

  render() {
    return (
      <div id='create-post'>
        <div id='show-picture'>
          {
            this.state.formData.image &&
            <img className='user-image' src={this.state.formData.image} alt={this.state.formData.id} />
          }
        </div>
        {
          this.state.formData &&
          <form onSubmit={
            this.handleSubmit
          }>
            <h1>New Post</h1>
            <input placeholder='Image Url' name="image" type="text" value={this.state.formData.image} onChange={this.handleChange} />
            <input placeholder='Write A Caption...' name="content" type="text" value={this.state.formData.content} onChange={this.handleChange} />
            <button>Share</button>
          </form>
        }
      </div>
    )
  }
}
export default withRouter(CreatePost)