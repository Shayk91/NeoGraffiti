import React from 'react'
import { createPost } from '../services/api-helper'

export default class CreatePost extends React.Component {

  state = {
    formData: {
      image: '',
      content: '',
      user_id: ''
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
    await createPost(this.state.currentUser.id, formData)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        {
          this.state.formData.image &&
          <img className='user-image' src={this.state.formData.image} alt={this.state.formData.id} />
        }
        {
          this.state.formData &&
          <form onSubmit={
            this.handleSubmit
          }>
            <p>Image:</p>
            <input name="image" type="text" value={this.state.formData.image} onChange={this.handleChange} />
            <p>Description:</p>
            <input name="content" type="text" value={this.state.formData.content} onChange={this.handleChange} />
            <button>Share</button>
          </form>
        }
      </div>
    )
  }
}
