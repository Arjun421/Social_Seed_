import React from 'react';
import '../CSS/Auth.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <div className="auth-logo-icon">S</div>
          <span>SocialSeed</span>
        </div>
        <h2>Welcome back</h2>
        <p className="auth-subtitle">Sign in to your account to continue</p>
        <form className="auth-form">
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
