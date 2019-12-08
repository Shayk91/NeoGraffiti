import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar(props) {
  return (
    <div id='inside-sidebar'>
      <Link id='image-user' to={`/accounts/${props.currentUser.id}`}>
        <img id='sidebar-image' src={props.currentUser.image} alt={props.currentUser.username} />
      </Link>
      <div id='names'>
        <Link to={`/accounts/${props.currentUser.id}`}>
          <h1 id='top-name'>{props.currentUser.username}</h1>
        </Link>
        <Link to={`/accounts/${props.currentUser.id}`}>
          <h1 id='bottom-name'>{props.currentUser.full_name}</h1>
        </Link>
      </div>
    </div >
  )
}
