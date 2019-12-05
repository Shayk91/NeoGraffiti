import React from 'react';
import { Link } from 'react-router-dom'

const SignUpForm = (props) => {

  return (
    <div className="auth-container">
      <h2>NeoGraffiti</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleSignUp();
      }} >
        <p>Email:</p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Full Name:</p>
        <input name="full_name" type="text" value={props.formData.full_name} onChange={props.handleChange} />
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Sign Up</button>
      </form>
      <Link to="/login">Have An Account? Log In</Link>
    </div>
  );
}

export default SignUpForm;