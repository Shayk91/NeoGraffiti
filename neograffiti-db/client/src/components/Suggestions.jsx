import React from 'react'

export default function Suggestions(props) {
  const correctUsers = props.users.filter(user => {
    return user.id != props.currentUser.id
  })
  return (
    <div id='suggestions'>
      <h1 id='suggestion-title'>Suggestions For You</h1>
      <div id='users'>
        {
          correctUsers.map(user => (
            <div className='users-line' key={user.id}>
              <img className='user-image' src={user.image} alt={user.id} />
              <h1>{user.username}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}
