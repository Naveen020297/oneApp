import React, { useState } from 'react';
import '../LoginSignup/LoginSignUpForm.scss';

const LoginSignupForm = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(e.target.value);
  };

  const handleSignupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupName(e.target.value);
  };

  const handleSignupEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupPassword(e.target.value);
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login form submitted');
    console.log('Email:', loginEmail);
    console.log('Password:', loginPassword);
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Signup form submitted');
    console.log('Name:', signupName);
    console.log('Email:', signupEmail);
    console.log('Password:', signupPassword);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h2>Login</h2>
          <p>Log in to your account</p>
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={handleLoginEmailChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={handleLoginPasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="form-wrapper">
        <div className="form-header">
          <h2>Sign Up</h2>
          <p>Create a new account</p>
        </div>
        <form onSubmit={handleSignupSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={signupName}
              onChange={handleSignupNameChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={handleSignupEmailChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={handleSignupPasswordChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupForm;
