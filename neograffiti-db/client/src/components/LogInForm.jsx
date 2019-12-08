import React from 'react';
import { Link } from 'react-router-dom';

const LogInForm = (props) => {
  return (
    <div className="login-form">
      <h2 className='cg' id='login-title'>ConcreteGallery</h2>
      <form
        onClick={(e) => {
          e.preventDefault()
          props.handleLogin();
        }}>
        <input autoComplete="off" autoFocus id='username-input' name="username" placeholder='Username' type="text" value={props.formData.username} onChange={props.handleChange} />
        <input autoComplete="off" id='password-input' name="password" placeholder='Password' type="password" value={props.formData.password} onChange={props.handleChange} />
        <div>
          <button className='buttons'> Log In</button>
        </div>
      </form>
      <Link id='signup-link' to="/signup">Don't Have An Account? <span id='signup'>Sign Up</span></Link>
    </div>
  );
}

export default LogInForm;