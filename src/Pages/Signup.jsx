import React from 'react';
import '../CSS/Auth.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <div className="auth-logo-icon">S</div>
          <span>SocialSeed</span>
        </div>
        <h2>Create your account</h2>
        <p className="auth-subtitle">Join thousands of professionals on SocialSeed</p>
        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Jane Doe" required />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Min. 8 characters" required />
          </div>
          <button type="submit">Create Account</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
