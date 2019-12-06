import React from 'react'
import { Link } from 'react-router-dom'
import CreateComment from './CreateComment'

export default function MainPage(props) {
  return (
    <div>
      {
        props.posts.map(post => (
          <div id='mainPage' key={post.id}>
            <div id='image-header'>
              <img className='user-image' src={post.user.image} alt={post.user.username} />
              <h1>{post.user.username}</h1>
            </div>
            <div id='mainImage'>
              <img src={post.image} alt={post.id} />
            </div>
            <div className='bottom'>
              <p className='description'><span className='username'>{post.user.username}</span> {post.content}</p>
              {
                post.comments.length > 2 &&
                <Link to={`/posts/${post.id}`}>View All {post.comments.length} Comments</Link>
              }
              <div>
                {
                  post.comments.length !== 0 ?
                    <div className='comment-display'>
                      <p>{post.comments[0].content}</p>
                    </div>
                    :
                    <></>
                }
                {
                  post.comments.length > 1 ?
                    <div className='comment-display'>
                      <p>{post.comments[1].content}</p>
                    </div>
                    :
                    <></>
                }
              </div>
              <p className='time'>{post.timedistance} ago</p>
            </div>
            <CreateComment
              postId={post.id}
              currentUser={props.currentUser}
            />
          </div>
        ))
      }
    </div >
  )
}
