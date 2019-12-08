import React from 'react'
import { Link } from 'react-router-dom'
import CreateComment from './CreateComment'

export default function MainPage(props) {
  window.scrollTo(0, 0)
  return (
    <div>
      {
        props.posts.map(post => (
          <div id='mainPage' key={post.id}>
            <div className='image-header'>
              <Link to={`/accounts/${post.user_id}`}>
                <img className='user-image' src={post.user.image} alt={post.user.username} />
              </Link>
              <Link className='image-header-name' to={`/accounts/${post.user_id}`}>
                <h1>{post.user.username}</h1>
              </Link>
            </div>
            <div id='mainImage'>
              <img src={post.image} alt={post.id} />
            </div>
            <div className='bottom'>
              <p className='description'><span className='username'><Link className='description-user' to={`/accounts/${post.user_id}`}>{post.user.username}</Link></span> {post.content}</p>
              {
                post.comments.length > 2 &&
                <Link to={`/posts/${post.id}`}>View All {post.comments.length} Comments</Link>
              }
              <div>
                {
                  post.comments.length !== 0 ?
                    <div className='comment-display'>
                      <Link className='description-user' to={`/accounts/${post.comments[0].user_id}`}>
                        <p className='username'>{post.comments[0].user.username}</p>
                      </Link>
                      <p>{post.comments[0].content}</p>
                    </div>
                    :
                    <></>
                }
                {
                  post.comments.length > 1 ?
                    <div className='comment-display'>
                      <Link className='description-user' to={`/accounts/${post.comments[1].user_id}`}>
                        <p className='username'>{post.comments[1].user.username}</p>
                      </Link>
                      <p>{post.comments[1].content}</p>
                    </div>
                    :
                    <></>
                }
              </div>
              < Link className='time-link' to={`/posts/${post.id}`}>
                <p className='time'>{post.timedistance} ago</p>
              </Link>
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
