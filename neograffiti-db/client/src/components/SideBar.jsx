import React from 'react'

export default function SideBar(props) {
  return (
    <div id='inside-sidebar'>
      <img id='sidebar-image' src={props.currentUser.image} alt={props.currentUser.username} />
      <div id='names'>
        <h1 id='top-name'>{props.currentUser.username}</h1>
        <h1 id='bottom-name'>{props.currentUser.full_name}</h1>
      </div>
    </div>
  )
}
