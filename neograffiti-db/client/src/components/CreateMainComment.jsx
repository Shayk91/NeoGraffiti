import React from 'react'
import { createComment } from '../services/api-helper'
import { withRouter } from 'react-router-dom'

class CreateMainComment extends React.Component {

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
    const newComment = await createComment(this.props.currentUser.id, this.props.postId, formData)
    this.props.changeThisName(this.props.postId, newComment)
    this.setState({
      formData: {
        content: ''
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.formData &&
          <form id='comment-form' onSubmit={
            this.handleSubmit
          } >
            <textarea id='comment-input' name="content" type="text" placeholder='Add A Comment...' value={this.state.formData.content} onChange={this.handleChange} />
            {
              this.state.formData.content &&
                this.state.formData.content.length > 0 ?
                <button className='post-filled'>Post</button>
                :
                <button className='post-submit'>Post</button>
            }
          </form>
        }
      </div>
    )
  }
}
export default withRouter(CreateMainComment)