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

  render() {
    return (
      <div>
        {
          this.props.formData &&
          <form id='comment-form' onSubmit={
            this.props.handleSubmit
          } >
            <textarea id='comment-input' name="content" type="text" placeholder='Add A Comment...' value={this.props.formData.content} onChange={this.props.handleChange} />
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
export default withRouter(CreateComment)