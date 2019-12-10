import React, { Component } from 'react'
import { getUser, updateUser } from '../services/api-helper'
import { Link, withRouter } from 'react-router-dom'

class EditPassword extends Component {

  state = {
    user: {},
    formData: {
      old_password: '',
      password: '',
      new_password: ''
    }
  }

  async componentDidMount() {
    const userId = parseInt(this.props.userId)
    const user = await getUser(userId)
    console.log(user)
    this.setState({
      user
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
    this.props.history.push('/')
  }

  render() {
    return (
      <div id='edit-profile'>
        <div id='edit-left'>
          <Link className='edit-links' to={`/accounts/${this.props.userId}/edit`}>
            <h1 className='unselected-edit'>Edit Profile</h1>
          </Link>
          <Link className='edit-links' to={`/accounts/${this.props.userId}/edit/password`}>
            <h1 className='selected-edit'>Change Password</h1>
          </Link>
        </div>
        <div id='edit-right'>
          {this.props.currentUser &&
            <div id='edit-user'>
              <img className='user-image' src={this.state.user.image} alt={this.state.user.username} />
              <h1>{this.state.user.username}</h1>
            </div>
          }
          <form id='edit-form' onSubmit={this.handleSubmit}>
            <p>Old Password</p>
            <input name="old_password" type="password" value={this.state.formData.old_password} onChange={this.handleChange} />
            <p>New Password</p>
            <input name="password" type="password" value={this.state.formData.password} onChange={this.handleChange} />
            <p id='password-right'>Confirm New <span>Password</span></p>
            <input name="new_password" type="password" value={this.state.formData.new_password} onChange={this.handleChange} />
            <div></div>
            <button>Change Password</button>
          </form>
        </div>
      </div>
    )
  }
}
export default withRouter(EditPassword)