import React from 'react'

export default function MainPage(props) {
  return (
    <div>
      {
        props.posts.map(post => (
          <div>
            <img className='user-image' src={post.user.image} />
            <h1>{post.user.username}</h1>
            <img src={post.image} />
            <p>{post.content}</p>
            {
              post.comments.map(comment => (
                <p>{comment.content}</p>
              ))
            }
            <p>{post.created_at}</p>
          </div>
        ))
      }
    </div >
  )
}
