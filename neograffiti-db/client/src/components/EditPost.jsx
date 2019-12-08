import React, { Component } from 'react'
import { readOnePost, updatePost } from '../services/api-helper'
import { withRouter } from 'react-router-dom'

class EditPost extends Component {

  state = {
    formData: {
      image: '',
      content: '',
      user_id: ''
    }
  }

  async componentDidMount() {
    const postId = parseInt(this.props.postId)
    const post = await readOnePost(postId)
    this.setState({
      formData: {
        image: post.image,
        content: post.content,
        user_id: post.user_id
      }
    })
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
    e.preventDefault()
    const postId = parseInt(this.props.postId)
    const formData = this.state.formData
    await updatePost(postId, formData)
    this.props.history.push(`/accounts/${this.props.currentUser.id}`)
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
            <h1>Edit Post</h1>
            <input placeholder='Image Url' name="image" type="text" value={this.state.formData.image} onChange={this.handleChange} />
            <input placeholder='Write A Caption...' name="content" type="text" value={this.state.formData.content} onChange={this.handleChange} />
            <button>Submit</button>
          </form>
        }
      </div>
    )
  }
}

export default withRouter(EditPost)