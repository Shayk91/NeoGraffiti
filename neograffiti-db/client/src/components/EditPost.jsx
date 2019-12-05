import React, { Component } from 'react'
import { readOnePost, updatePost } from '../services/api-helper'

export default class EditPost extends Component {

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
    // this.props.history.push('/')
  }

  render() {
    return (
      <div>
        {this.props.currentUser &&
          <div>
            <img className='user-image' src={this.props.currentUser.image} alt={this.props.currentUser.username} />
            <h1>{this.props.currentUser.username}</h1>
          </div>
        }
        {
          this.state.formData.image &&
          <img className='user-image' src={this.state.formData.image} alt={this.state.formData.id} />
        }
        <form onSubmit={this.handleSubmit}>
          <p>Image:</p>
          <input name="image" type="text" value={this.state.formData.image} onChange={this.handleChange} />
          <p>Description:</p>
          <input name="content" type="text" value={this.state.formData.content} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
