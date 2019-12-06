import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/canvas.png'
import profile from '../images/user.png'

export default function Header(props) {
  return (
    <div id='header'>
      <div id='left'>
        <Link to='/'><img id='logo' src={logo} alt='logo' /></Link>
        <div id='line'></div>
        <h1 className='cg'>ConcreteGallery</h1>
      </div>
      <div id='right'>
        {props.currentUser
          ?
          <>
            <Link to={`/accounts/${props.currentUser.id}`}><img id='profile' src={profile} alt='profile' /></Link>
            <h1 onClick={props.handleLogout}>logout</h1>
          </>
          :
          <Link to='/login'>Login</Link>
        }
      </div>
    </div>
  )
}
