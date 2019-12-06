import React, { Component } from 'react'
import { getUser, updateUser } from '../services/api-helper'

export default class EditProfile extends Component {

  state = {
    formData: {
      full_name: '',
      username: '',
      image: '',
      bio: '',
      email: '',
      password_digest: ''
    }
  }

  async componentDidMount() {
    const userId = parseInt(this.props.userId)
    const user = await getUser(userId)
    console.log(user)
    this.setState({
      formData: {
        full_name: user.full_name,
        username: user.username,
        image: user.image,
        bio: user.bio,
        email: user.email,
        password_digest: user.password_digest
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
    const userId = parseInt(this.props.userId)
    const formData = this.state.formData
    console.log(userId)
    console.log(formData)
    console.log(this.state.formData)
    await updateUser(userId, formData)
    // this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <h1>Change Password</h1>
        {this.props.currentUser &&
          <div>
            <img className='user-image' src={this.props.currentUser.image} alt={this.props.currentUser.username} />
            <h1>{this.props.currentUser.username}</h1>
          </div>
        }
        <form onSubmit={this.handleSubmit}>
          <p>Name:</p>
          <input name="full_name" type="text" value={this.state.formData.full_name} onChange={this.handleChange} />
          <p>Username:</p>
          <input name="username" type="text" value={this.state.formData.username} onChange={this.handleChange} />
          <p>Image:</p>
          <input name="image" type="text" value={this.state.formData.image} onChange={this.handleChange} />
          <p>Bio:</p>
          <textarea name="bio" value={this.state.formData.bio} onChange={this.handleChange} />
          <p>Email:</p>
          <input name="email" type="text" value={this.state.formData.email} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
