import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/auth.css';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to reset password.');
      alert(data.message);
      navigate('/login');
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Reset Password</h2>
        <input type="password" placeholder="New password (6+ characters)" minLength="6" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <input type="password" placeholder="Confirm new password" minLength="6" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
        <button type="submit" className="btn">Update Password</button>
        {error && <p role="alert">{error}</p>}
        <p><Link to="/login">Back to Login</Link></p>
      </form>
    </div>
  );
};

export default ResetPassword;
