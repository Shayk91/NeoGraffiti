import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
      <Link to='/'>Home</Link>
      <div>
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <Link to='/login'>Login</Link>
        }
      </div>
    </div>
  )
}
