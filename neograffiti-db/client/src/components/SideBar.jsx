import React from 'react'

export default function SideBar(props) {
  return (
    <div>
      <h1>{props.currentUser.username}</h1>
      <h2>{props.currentUser.full_name}</h2>
      <img className='user-image' src={props.currentUser.image} />
    </div>
  )
}
