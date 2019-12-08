import React, { Component } from 'react'
import { getUser, updateUser } from '../services/api-helper'
import { Link } from 'react-router-dom'

export default class EditProfile extends Component {

  state = {
    user: {},
    formData: {
      full_name: '',
      username: '',
      image: '',
      bio: '',
      email: ''
    }
  }

  async componentDidMount() {
    const userId = parseInt(this.props.userId)
    const user = await getUser(userId)
    this.setState({
      user,
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
    await updateUser(userId, formData)
    // this.props.history.push(`/accounts/${this.props.userId}`)
  }

  render() {
    return (
      <div id='edit-profile'>
        <div id='edit-left'>
          <Link className='edit-links' to={`/accounts/${this.props.userId}/edit`}>
            <h1 className='selected-edit'>Edit Profile</h1>
          </Link>
          <Link className='edit-links' to={`/accounts/${this.props.userId}/edit/password`}>
            <h1 className='unselected-edit'>Change Password</h1>
          </Link>
        </div>
        <div id='edit-right'>
          {this.props.currentUser &&
            <div id='edit-user'>
              <img className='user-image' src={this.state.formData.image} alt={this.state.user.username} />
              <h1>{this.state.user.username}</h1>
            </div>
          }
          <form id='edit-form' onSubmit={this.handleSubmit}>
            <p>Name</p>
            <input name="full_name" type="text" value={this.state.formData.full_name} onChange={this.handleChange} />
            <p>Username</p>
            <input name="username" type="text" value={this.state.formData.username} onChange={this.handleChange} />
            <p>Image</p>
            <input name="image" type="text" value={this.state.formData.image} onChange={this.handleChange} />
            <p>Bio</p>
            <textarea name="bio" value={this.state.formData.bio} onChange={this.handleChange} />
            <p>Email</p>
            <input name="email" type="email" value={this.state.formData.email} onChange={this.handleChange} />
            <div></div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
