import React from 'react';
import { Link } from 'react-router-dom'

const SignUpForm = (props) => {

  return (
    <div className="signup-form">
      <h2 className='cg' id='signup-title'>ConcreteGallery</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleSignUp();
      }} >
        <input autoFocus id='email-input' placeholder='Email' name="email" type="email" value={props.formData.email} onChange={props.handleChange} />
        <input placeholder='Full Name' id='fullname-input' name="full_name" type="text" value={props.formData.full_name} onChange={props.handleChange} />
        <input id='username-input' placeholder='Username' name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input id='password-input' placeholder='Password' name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <div>
          <button className='buttons'>Sign Up</button>
        </div>
      </form>
      <Link id='signup-link' to="/">Have An Account? <span id='signup'>Log In</span></Link>
    </div>
  );
}

export default SignUpForm;