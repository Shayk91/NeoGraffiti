import React from 'react'
import { createComment } from '../services/api-helper'
import { withRouter } from 'react-router-dom'

class CreateComment extends React.Component {

  state = {
    formData: {
      content: '',
      user_id: '',
      post_id: ''
    }
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({
        formData: {
          user_id: this.props.currentUser.id,
          post_id: this.props.postId
        }
      })
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
    await createComment(this.props.currentUser.id, this.props.postId, formData)
  }

  render() {
    return (
      <div>
        {
          this.state.formData &&
          <form id='comment-form' >
            <input id='comment-input' name="content" type="text" placeholder='Add A Comment...' value={this.state.formData.content} onChange={this.handleChange} />
            <p onClick={
              this.handleSubmit
            }>Post</p>
          </form>
        }
      </div>
    )
  }
}
export default withRouter(CreateComment)