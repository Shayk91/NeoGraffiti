import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage(props) {
  return (
    <div>
      {
        props.posts.map(post => (
          <div key={post.id}>
            <img className='user-image' src={post.user.image} alt={post.user.username} />
            <h1>{post.user.username}</h1>
            <img src={post.image} alt={post.id} />
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`}>View All Comments</Link>
            {
              post.comments.map(comment => (
                <div key={comment.id}>
                  <p>{comment.content}</p>
                </div>
              ))
            }
            <p>{post.timedistance} ago</p>
          </div>
        ))
      }
    </div >
  )
}
