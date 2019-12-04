import React from 'react';
import { Link } from 'react-router-dom';

const LogInForm = (props) => {
  return (
    <div className="auth-container">
      <h2>NeoGraffiti</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
        props.handleLoginButton();
      }} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Log In</button>
      </form>
      <Link to="/signup">Don't Have An Account? Sign Up</Link>
    </div>
  );
}

export default LogInForm;