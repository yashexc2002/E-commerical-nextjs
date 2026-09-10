import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to send reset email.');
      setMessage(data.message);
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Forgot Password</h2>
        <p>Enter your email and we&apos;ll send you a reset link.</p>
        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <button type="submit" className="btn">Send Reset Link</button>
        {message && <p role="status">{message}</p>}
        {error && <p role="alert">{error}</p>}
        <p><Link to="/login">Back to Login</Link></p>
      </form>
    </div>
  );
};

export default ForgotPassword;
