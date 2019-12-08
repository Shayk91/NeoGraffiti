import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/heartlogo.png'
import profile from '../images/user.png'

export default function Header(props) {
  return (
    <div id='header'>
      <div id='left'>
        <Link to='/'><img id='logo' src={logo} alt='logo' /></Link>
        <div id='line'></div>
        <Link className='edit-links' to='/'>
          <h1 className='cg'>ConcreteGallery</h1>
        </Link>
      </div>
      <div id='right'>
        {props.currentUser
          ?
          <>
            <Link to={`/accounts/${props.currentUser.id}`}><img id='profile' src={profile} alt='profile' /></Link>
            <h1 onClick={props.handleLogout}>Logout</h1>
          </>
          :
          <Link to='/'>Log In</Link>
        }
      </div>
    </div>
  )
}
