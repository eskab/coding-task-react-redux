import React, { PropTypes } from 'react'

const LoginBox = ({ handler }) => {
  let username, password;

  return (
    <div className="login-box">
      <span className="login-box-logo">A</span>
      <div className="login-box-group">
        <input type="text" name="username" placeholder="My Login" ref={node => { username = node }} />
        <input type="password" name="password" placeholder="Password" ref={node => { password = node }} />
      </div>
      <button onClick={(e) => handler(username.value, password.value)}>Login</button>
    </div>
  );
}

LoginBox.propTypes = {
  handler: PropTypes.func.isRequired
};

export default LoginBox;