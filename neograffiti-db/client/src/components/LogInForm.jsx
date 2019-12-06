import React from 'react';
import { Link } from 'react-router-dom';

const LogInForm = (props) => {
  return (
    <div className="login-form">
      <h2 className='cg' id='login-title'>ConcreteGallery</h2>
      <form>
        <input autoFocus id='username-input' name="username" placeholder='Username' type="text" value={props.formData.username} onChange={props.handleChange} />
        <input id='password-input' name="password" placeholder='Password' type="password" value={props.formData.password} onChange={props.handleChange} />
        <div>
          <h1 onClick={() => {
            props.handleLogin();
          }}> Log In</h1>
        </div>
      </form>
      <Link id='signup-link' to="/signup">Don't Have An Account? <span id='signup'>Sign Up</span></Link>
    </div>
  );
}

export default LogInForm;